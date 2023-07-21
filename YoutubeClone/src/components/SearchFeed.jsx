import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {  Videos } from ".";
import { fetchApi } from "../utils/fetchApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const{searchTerm}= useParams()
  const[videos,setVideos]= useState([])

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
 
  }, [searchTerm]);

  return (
    <Box
        p={2} sx={{overflowY: "auto",height: "90vh",flex: 2,}}
      >
        <Typography variant="h4" fontWeight="bold" marginBottom="2"
          sx={{ color: "white" }} >
          Results for
          <span style={{ color: " #fc1503", marginLeft: '10px' }}
          >
            {searchTerm} videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
   
  );
};

export default SearchFeed;
