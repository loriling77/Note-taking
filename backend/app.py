import os
from flask import Flask, jsonify,request
from flask_cors import CORS
from models import db,Note

def create_app():

    app = Flask(__name__)

    CORS(
        app,
        resources={
            r"/api/*":{
                "origins":"http://localhost:5173"
            }
        }
    )

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg://notes_user:notes_password@db:5432/notes_db"
    )

    

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    with app.app_context():
        db.create_all()

    @app.route("/api/notes", methods=["GET"])
    def get_notes():
        notes = Note.query.all()
        return jsonify([
            note.to_dict()
            for note in notes
        ])

    @app.route("/api/notes", methods=["POST"])
    def create_note():
        data = request.get_json()

        if not data:
            return jsonify({
                "message":"JSON body is required"
            }), 400

        title = data.get("title","").strip()
        tag = data.get("tag","").strip()
        body = data.get("body","").strip()

        if not title or not tag or not body:
            return({
                "message":"title,tag and body are required"
            }),400

        note = Note(title=title,tag=tag,body=body)

        db.session.add(note)
        db.session.commit()

        return jsonify(note.to_dict()),201

    @app.route("/api/get/<int:note_id>", methods=["GET"])
    def get_note(note_id):
        note = db.session.get(Note,note_id)

        if not note:
            return jsonify({
                "message":"Note not found"
            }),400

        return jsonify(note.to_dict())

    @app.route("/api/put/<int:note_id>", methods=["PUT"])
    def update_note(note_id):
        note = db.session.get(Note,note_id)
        if not note:
            return jsonify({
                "message":"Note not found"
            }),404
        data = request.get_json()

        note.title = data.get("title",note.title)
        note.tag = data.get("tag",note.tag)
        note.body = data.get("body",note.body)
        db.session.commit()
        return jsonify(note.to_dict())

    @app.route("/api/delete/<int:note_id>",methods=["DELETE"])
    def delete_note(note_id):
        note = db.session.get(Note, note_id)
        if not note:
            return jsonify({
                "message":"Note not found"
            }),404

        db.session.delete(note)
        db.session.commit()

        return jsonify({
            "message":"Note deleted"
        })
    return app
app = create_app()

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
