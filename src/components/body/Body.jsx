import React from "react";
import NoteInput from "./input/NoteInput";
import NoteList from "./note/NoteList";

export default function Body({
  contentsActive,
  contentsArchived,
  onDelete,
  onArchive,
  onAddNote,
}) {
  function renderContent(contents) {
    if (contents.length === 0)
      return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    return (
      <NoteList contents={contents} onDelete={onDelete} onArchive={onArchive} />
    );
  }

  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      {renderContent(contentsActive)}
      <h2>Arsip</h2>
      {renderContent(contentsArchived)}
    </div>
  );
}
