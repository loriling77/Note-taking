import '../styles/EditTagPopup.css'

type EditTagPopupProps = {
    handlePopup: () => void;
};

export default function EditTagPopup({ handlePopup }: EditTagPopupProps) {

    return (
        <div className="popup-overlay">

            <div className="edit-tag-popup">

                <div className="popup-header">
                    <h2>Edit Tags</h2>

                    <button className="btn-x" onClick={handlePopup} >
                        ×
                    </button>
                </div>

                <div className="tag-edit-row">
                    <input
                        type="text"
                        placeholder="Enter tag"
                    />

                    <button className="btn-delete">
                        Delete
                    </button>
                </div>



            </div>

        </div>
    )
}