import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { PostsContainer } from "./styles"; // Styled component from updated styles.js

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return posts.length === 0 ? (
    <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
      <CircularProgress />
    </Box>
  ) : (
    <PostsContainer container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </PostsContainer>
  );
};

export default Posts;
