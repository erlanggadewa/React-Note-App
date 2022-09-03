import NoteAction from "../content/NoteAction";
import NoteContent from "../content/NoteContent";

export default function NoteItem({ content, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteContent {...content} />
      <NoteAction
        onDelete={onDelete}
        activeStatus={!content.archived}
        id={content.id}
        onArchive={onArchive}
      />
    </div>
  );
}
