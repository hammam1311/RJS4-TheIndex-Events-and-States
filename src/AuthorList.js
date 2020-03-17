import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";


class AuthorList extends Component {
  state = {
    authors: this.props.authors
  };

  filterAuthors = query => {
    this.setState({
      authors: this.props.authors.filter(author => {
        const authorName = author.first_name + " " + author.last_name;
        return authorName.toLowerCase().includes(query.toLowerCase())
      })
    });
  }
  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));
    return (
      <div className="authors">
        <SearchBar filter={this.filterAuthors} />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;