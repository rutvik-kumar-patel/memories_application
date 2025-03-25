import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { 
  StyledPaper, 
  FormContainer, 
  StyledTextField, 
  FileInput, 
  SubmitButton 
} from "./styles"; // Import styled components

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: "", message: "", tags: "", selectedFile: "" });
  const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId) : null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    }
    clear();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPostData({ ...postData, selectedFile: reader.result });
      };
    }
  };

  if (!user?.result?.name) {
    return (
      <StyledPaper>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like others' memories.
        </Typography>
      </StyledPaper>
    );
  }

  return (
    <StyledPaper>
      <FormContainer autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">
          {currentId ? `Editing "${post?.name}"` : "Creating a Memory"}
        </Typography>
        <StyledTextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
        />
        <StyledTextField 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth 
          multiline 
          minRows={4} 
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
        />
        <StyledTextField 
          name="tags" 
          variant="outlined" 
          label="Tags (comma separated)" 
          fullWidth 
          value={postData.tags} 
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })} 
        />
        <FileInput>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </FileInput>
        <SubmitButton variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </SubmitButton>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </FormContainer>
    </StyledPaper>
  );
};

export default Form;
