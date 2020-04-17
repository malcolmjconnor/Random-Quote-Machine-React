import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="quote-box">
        <h1 id="text">A quote a day..</h1>
        <p id="author">Author</p>
        <a id="new-quote" className="btn btn-secondary" href="#" role="button">
          New Quote
        </a>
        <a
          id="tweet-quote"
          className="btn btn-primary"
          href="twitter.com/intent/tweet"
          role="button"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}
