import React from "react";
export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      archived: "",
      createdAt: "",
      limit: 50,
    };
    this.onAddNote = props.onAddNote;

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date(),
    };
    this.onAddNote(newNote);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    if (event.target.value.length <= limit) {
      return this.setState(() => {
        return {
          title: event.target.value,
          limit: limit - event.target.value.length,
        };
      });
    }
    const titleLimitText = event.target.value.slice(0, limit);
    this.setState({ title: titleLimitText, limit: 0 });
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <div className="note-input">
        <h1>Buat Catatan</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.limit}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required="true"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          ></input>
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            required="true"
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
