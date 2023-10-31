import React from 'react';
import { Card, CardContent, Typography, Box, ImageList, ImageListItem } from '@mui/material';
import { styled } from '@mui/system';
import Image, { StaticImageData } from 'next/image';

interface BookProps {
  author: string;
  name: string;
  rating: number;
  cover: StaticImageData;
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  margin: theme.spacing(2),
  height: '200px', 
  width:'250px'
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const BookCard: React.FC<BookProps> = ({ author, name, rating, cover }) => {
  return (
    <StyledCard>
      <ImageList cols={1}>
        <ImageListItem>
          <Image src={cover} alt={name} />
        </ImageListItem>
      </ImageList>
      <StyledCardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">{author}</Typography>
        <Typography variant="subtitle2">{`Rating: ${rating}`}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default BookCard;