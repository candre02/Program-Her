
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Text, Flex, Box, Stack, Button, Textarea} from "@chakra-ui/react"
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_COMMENTS } from '../utils/queries'
import {ADD_COMMENT} from '../utils/mutations'
import Auth from '../utils/auth'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

const SingleComment = (props) => {
  
  const [commentText, setText] = useState("");
  const { data, loading } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];
  const [characterCount, setCharacterCount] = useState(0)
  const [addComment, {error}] = useMutation(ADD_COMMENT, {
    variable: {addCommentText: commentText},
  
  update(cache, { data: { addComment } }) {
    try {
      const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
      cache.writeQuery({
        query: QUERY_COMMENTS,
        data: { comments: [addComment, ...comments] },
      });
    } catch (e) {
      console.error(e);
    }
  },
});
const handleChange = (event) => {
  if (event.target.value.length <= 280) {
    setText(event.target.value);
    setCharacterCount(event.target.value.length);
  }
};
const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    await addComment({
      variables: { commentText },
    });
    setText("");
    setCharacterCount(0);
  } catch (e) {
    console.error(e);
  }
};

  return (
    <>
      <Flex
        p="4"
        flexDirection="row"
        // width="100wh"
        // height="89vh"
       justifyContent="center"
        id="singleComment"
        overflowY="auto"
       
      >
        <Box boxSize="lg" w="105vh" h="130vh" mt={50} rounded="md" >
          <form onSubmit={handleFormSubmit}>
            <Stack
              rounded="md"
              spacing={8}
              width="58vh"
              p="2rem 2rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              outline="solid 1px"
            >
              <Text fontWeight="semibold">
                Comment Here
              </Text>
              <Text
                className={`m-0 ${
                  characterCount === 280 || error ? "text-error" : ""
                }`}
              >
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
              </Text>
              <Textarea
                border="1px"
                borderColor="gray.300"
                boxShadow="2xl"
                rounded="md"
                bg="white"
                spacing={4}
                m={2}
                placeholder="Comment an event..."
                value={commentText}
                name={commentText}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
              ></Textarea>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="purple"
                width="full"
                rounded="md"
              >
                Submit
              </Button>
            </Stack>
            {comments.commentText > 0 && (
            <CommentList comments={commentText._id}/>
            )}
          </form>
          {/* <div>
            <div className="flex-row justify-space-between">
              <div className="col-12 mb-3">
              {loading ? (
                <div> Loading... </div>
              ) : ( 

              
                  <Box mt={300}>
                    
                    <CommentList  /> */}
                    {/* <CommentForm commentId={comments._id} /> */}
                  {/* </Box>
              )}
              </div>
            </div>
          </div> */}
        </Box>
      </Flex>
    </>
  )
}

export default SingleComment
