export default function NoteAction({ id, onDelete, activeStatus, onArchive }) {
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => onDelete(id, activeStatus)}
      >
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id, activeStatus)}
      >
        {activeStatus ? "Arsipkan" : "Pindahkan"}
      </button>
    </div>
  );
}
