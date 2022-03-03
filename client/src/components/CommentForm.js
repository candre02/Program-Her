import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_COMMENT } from '../utils/mutations'
import { QUERY_COMMENTS } from '../utils/queries' // <- removed query_me

const CommentForm = (commentId) => {
  const [commentBody, setBody] = useState('')
  const [characterCount, setCharacterCount] = useState(0)

  const [addComment, { error }] = useMutation(ADD_COMMENT);
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComment({
        variables: { commentBody, commentId },
      });
      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  // T, {
  //   update(cache, { data: { addComment } }) {
  //     try {
  //       // update comment array's cache
  //       // could potentially not exist yet, so wrap in a try/catch
  //       const { comments } = cache.readQuery({ query: QUERY_COMMENTS })
  //       cache.writeQuery({
  //         query: QUERY_COMMENTS,
  //         data: { comments: [addComment, ...comments] },
  //       });
  //     } catch (e) {
  //       console.error(e)
  //     }
  //     // (below: errors when using query me)
  //     // // update me object's cache
  //     // const { me } = cache.readQuery({ query: QUERY_ME })
  //     // cache.writeQuery({
  //     //   query: QUERY_ME,
  //     //   data: { me: { ...me, comments: [...me.comments, addComment] } },
  //     // });
  //   },
  // }
  // update state based on form input changes
  // const handleChange = (event) => {
  //   if (event.target.value.length <= 280) {
  //     setText(event.target.value)
  //     setCharacterCount(event.target.value.length)
  //   }
  // }

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault()

  //   try {
  //     await addComment({
  //       variables: { commentText },
  //     })

  //     // clear form value
  //     setText('')
  //     setCharacterCount(0)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // };

  // not needed lines 50-60
  // const [addComment, { error }] = useMutation(ADD_COMMENT, {
  //   update(cache, { data: { addComment } }) {
  //     const { comments } = cache.readQuery({ query: QUERY_COMMENTS });

  //     cache.writeQuery({
  //       query: QUERY_COMMENTS,
  //       data: { comments: [addComment, ...comments] }
  //     });
  //   }
  // });

  return (
    <div>
      {/* added character count walue to the p element */}
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      {/* added hanldeformsubmit function to the form element */}
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        {/* added the thoughtText value, hanldeChange function to the textarea element */}
        <textarea
          placeholder="Add your comments here"
          value={commentBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
