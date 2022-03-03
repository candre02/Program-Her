// import files
import React from 'react';
import { Link } from 'react-router-dom';


const CommentList = ({ comments, title }) => {
  if (!comments) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map((comment) => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header">
              {/* extra path to the end of link component */}
              {/* {comment.commentBody} */}
              <Link 
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {comment.username}
              </Link>{' '}
               on {comment.createdAt}
            </p>
            <div className="card-body">
              {/* extra path to the end of link component */}
              <Link to={`/comment/${comment._id}`}>
                <p>{comment.commentText}</p>
                <p>{comments.commentCount}</p>
                {/* <p className="mb-0">
                  Reactions: {comment.reactionCount} || Click to{' '}
                  {comment.reactionCount ? 'see' : 'start'} the discussion!
                </p> */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
