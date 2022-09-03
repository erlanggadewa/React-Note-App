import Search from "./Search";

export default function HeaderNote({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Simple Notes App</h1>
      <Search onSearch={onSearch} />
    </div>
  );
}
