import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = props.onSearch;

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.onSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onSearchEventHandler}
          placeholder="Search...."
        />
      </div>
    );
  }
}
