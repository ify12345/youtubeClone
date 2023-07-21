import { Stack,Box } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard} from '.'

const Videos = ({videos,direction}) => {
 if(!videos?.length)return "loading...."

  return (
   <Stack
   direction={direction||"row"}
   flexWrap="wrap" gap={2}
   justifyContent="start">
       {videos.map((item,idx)=>(
          <Box key={idx}>
               {item.id.videoId && <VideoCard video={item}/>}
               {item.id.channelId && <ChannelCard channelDetail={item}/> }
          </Box>
       ))}
   </Stack>
  )
}

export default Videos
