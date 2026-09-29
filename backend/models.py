from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Note(db.Model):
    __tablename__="notes"

    id = db.Column(
        db.Integer,
        primary_key =True
    )

    title = db.Column(
        db.String(200),
        nullable = False
    )
    tag = db.Column(
        db.String(100),
        nullable = False
    )

    body = db.Column(
        db.Text,
        nullable = False
    )

    def to_dict(self):
        return{
            'id':self.id,
            'title':self.title,
            'tag': self.tag,
            'body':self.body
        }
