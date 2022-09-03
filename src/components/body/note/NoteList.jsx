import NoteItem from "./NoteItem";

export default function NoteList({ contents, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {contents.map((content) => {
        return (
          <NoteItem
            key={content.id}
            content={content}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        );
      })}
    </div>
  );
}
