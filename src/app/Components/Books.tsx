"use client"
import React from 'react';
import { Button, Box } from '@mui/material';
import BookCard from './BookCard';
import asset from '../../../public/image-asset.jpeg'
import memories from '../../../public/memories.jpg'
import newbook from '../../../public/newbook.jpg'
import story from '../../../public/story.jpeg'
import thegoodsister from '../../../public/thegoodsister.jpg'

const books = [
  { author: 'Author 1', name: 'Book 1', rating: 4.5, cover:memories },
  { author: 'Author 2', name: 'Book 2', rating: 4.0 ,cover : memories},
  { author: 'Author 3', name: 'Book 3', rating: 4.0 ,cover : memories},
  { author: 'Author 4', name: 'Book 4', rating: 4.0 ,cover : memories},
  { author: 'Author 5', name: 'Book 5', rating: 4.0 ,cover : memories},
  
];

const FeaturedBooks: React.FC = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Box>
      <Button onClick={() => scroll(-100)}>Scroll Left</Button>
      <Button onClick={() => scroll(100)}>Scroll Right</Button>
      <Box ref={scrollContainer} display="flex" overflow="auto" mt={5}>
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedBooks;
