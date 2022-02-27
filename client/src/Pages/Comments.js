import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import { QUERY_COMMENT} from "../utils/queries";

const Comment = (props) => {
  const { id: commentId } = useParams();
  console.log(commentId);



  const { loading, data } = useQuery(QUERY_COMMENT, {
    variables: { id: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {comment.username}
          </span>{" "}
          comment on {comment.createdAt}
        </p>
        <div className="card-body">
          <p>{comment.commentText}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;