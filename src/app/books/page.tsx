"use client"
import { Box, Button, Select, MenuItem, TextField } from "@mui/material";
import { useState } from 'react';
import BookCard from "../Components/BookCard";
import memories from '../../../public/memories.jpg'

export default function Books() {
  const [sortType, setSortType] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const books = [
    { author: "George Orwell", name: "1984", rating: 4.5, cover: memories },
    { author: "J.K. Rowling", name: "Harry Potter and the Philosopher's Stone", rating: 4.0, cover: memories },
    { author: "Harper Lee", name: "To Kill a Mockingbird", rating: 4.2, cover: memories },
    { author: "F. Scott Fitzgerald", name: "The Great Gatsby", rating: 3.8, cover: memories },
    { author: "Jane Austen", name: "Pride and Prejudice", rating: 4.7, cover: memories },
    { author: "Leo Tolstoy", name: "War and Peace", rating: 4.1, cover: memories },
    { author: "Charles Dickens", name: "Great Expectations", rating: 4.3, cover: memories },
    { author: "Mark Twain", name: "The Adventures of Huckleberry Finn", rating: 4.6, cover: memories },
    { author: "J.R.R. Tolkien", name: "The Lord of the Rings", rating: 4.4, cover: memories },
    { author: "Agatha Christie", name: "Murder on the Orient Express", rating: 3.9, cover: memories },
    { author: "George R.R. Martin", name: "A Game of Thrones", rating: 4.8, cover: memories },
    { author: "Herman Melville", name: "Moby-Dick", rating: 3.7, cover: memories },
    { author: "Gabriel Garcia Marquez", name: "One Hundred Years of Solitude", rating: 4.2, cover: memories },
    { author: "Fyodor Dostoevsky", name: "Crime and Punishment", rating: 4.0, cover: memories },
    { author: "Jules Verne", name: "Twenty Thousand Leagues Under the Sea", rating: 4.5, cover: memories },
  ];

  const sortedBooks = [...books].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'author') {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  const filteredBooks = sortedBooks.filter(book => 
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col bg items-center justify-between">
      <Box display="flex" flexDirection="column" alignItems="center" width='100%' overflow="auto" mt={10}>
        <Box display="flex" justifyContent="space-between" width='100%'>
          <Select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <MenuItem value={'name'}>Sort by Name</MenuItem>
            <MenuItem value={'author'}>Sort by Author</MenuItem>
          </Select>
          <TextField label="Search" variant="outlined" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </Box>
        <Box display="flex" flexWrap='wrap'>
          {filteredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </Box>
      </Box>
    </main>
  );
}
