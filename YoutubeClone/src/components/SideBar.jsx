import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ({selectedCategory,setSelectedCategory}) => {
  
 
    
  return (
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:"auto", md: '95%' },
        flexDirection: {md: 'column'}

    }}>
      {categories.map((category)=>(
        <button
        onClick={()=>setSelectedCategory(category.name)}
        className='category-btn'
        style={{
            background: category.name === selectedCategory && '#fc1503',
            color: 'white',
        
        }}
        key={category.name}>
            <span style={{
                color: category.name ===selectedCategory ?'white':'red',
                marginRight: '15px',
            }}>{category.icon}</span>
            <span
            style={{
                
            }}>{category.name}</span>
        </button>
      ))}


    </Stack>
  )
}

export default SideBar
