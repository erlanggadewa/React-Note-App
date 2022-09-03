import React from "react";
import { getInitialData } from "../utils";
import Body from "./body/Body";
import HeaderNote from "./header/Header";
class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    const contents = this.filterByStatus(getInitialData());

    this.state = {
      tempContentsActive: contents.contentsActive,
      tempContentsArchived: contents.contentsArchived,
      contentsActive: contents.contentsActive,
      contentsArchived: contents.contentsArchived,
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveToggleEventHandler =
      this.onArchiveToggleEventHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  filterByStatus(contents) {
    const contentsActive = contents.filter((content) => !content.archived);
    const contentsArchived = contents.filter((content) => content.archived);
    return { contentsActive, contentsArchived };
  }

  onDeleteEventHandler(id, activeStatus) {
    if (activeStatus) {
      const newContents = this.state.contentsActive.filter(
        (content) => content.id !== id
      );
      this.setState(() => {
        return {
          contentsActive: newContents,
          tempContentsActive: newContents,
        };
      });
    } else {
      const newContents = this.state.contentsArchived.filter(
        (content) => content.id !== id
      );
      this.setState(() => {
        return {
          contentsArchived: newContents,
          tempContentsArchived: newContents,
        };
      });
    }
  }

  onArchiveToggleEventHandler(id, activeStatus) {
    if (activeStatus) {
      const newActiveContents = this.state.contentsActive.filter(
        (content) => content.id !== id
      );
      const selectedArchivedContents = this.state.contentsActive.find(
        (content) => content.id === id
      );
      selectedArchivedContents.archived = true;

      this.setState((prevState) => {
        return {
          contentsActive: newActiveContents,
          tempContentsActive: newActiveContents,
          contentsArchived: [
            ...prevState.contentsArchived,
            selectedArchivedContents,
          ],
          tempContentsArchived: [
            ...prevState.contentsArchived,
            selectedArchivedContents,
          ],
        };
      });
    } else {
      const newArchivedContents = this.state.contentsArchived.filter(
        (content) => content.id !== id
      );
      const selectedActiveContents = this.state.contentsArchived.find(
        (content) => content.id === id
      );
      selectedActiveContents.archived = false;

      this.setState((prevState) => {
        return {
          contentsActive: [...prevState.contentsActive, selectedActiveContents],
          tempContentsActive: [
            ...prevState.contentsActive,
            selectedActiveContents,
          ],
          contentsArchived: newArchivedContents,
          tempContentsArchived: newArchivedContents,
        };
      });
    }
  }

  onAddNoteHandler({ id, title, body, archived, createdAt }) {
    // * Default archived status is false
    this.setState((prevState) => {
      return {
        contentsActive: [
          ...prevState.contentsActive,
          { id, title, body, archived, createdAt },
        ],
        tempContentsActive: [
          ...prevState.contentsActive,
          { id, title, body, archived, createdAt },
        ],
      };
    });
  }

  onSearchEventHandler(keyword) {
    const contentsActive = this.state.tempContentsActive.filter((content) =>
      content.title.toLowerCase().includes(keyword)
    );
    const contentsArchived = this.state.tempContentsArchived.filter((content) =>
      content.title.toLowerCase().includes(keyword)
    );
    this.setState(() => {
      return {
        contentsActive,
        contentsArchived,
      };
    });
  }

  render() {
    return (
      <>
        <HeaderNote onSearch={this.onSearchEventHandler} />
        <Body
          contentsActive={this.state.contentsActive}
          contentsArchived={this.state.contentsArchived}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveToggleEventHandler}
          onAddNote={this.onAddNoteHandler}
        />
      </>
    );
  }
}
export default NoteApp;
