import React, { useState, useEffect } from "react";
const axios = require("axios").default;

export default function Comments({ article_id }) {
  const [articleComments, setArticleComments] = useState();
  useEffect(() => {
    axios
      .get(
        `https://tajwars-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then((response) => {
        setArticleComments(response.data.articleComments);
      });
  }, [article_id]);
  if (articleComments === undefined) {
    return [];
  } else {
    return (
      <div className="commentsSection">
        <h3>Comments section</h3>
        <ul className="commentsList">
          {articleComments.map((comment) => {
            return (
              <li className="comments" key={comment.comment_id}>
                <div className="container">
                  <h4>
                    <b>Author: {comment.author}</b>
                  </h4>
                  <p>
                    <b>Comment:</b> <br /> {comment.body}
                  </p>
                  <p>
                    <b>Created at:</b> {comment.created_at}
                  </p>
                  <p>
                    <b>Votes: </b>
                    {comment.votes}
                  </p>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
