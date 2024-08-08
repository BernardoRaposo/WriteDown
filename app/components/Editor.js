"use client"

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { saveAs } from 'file-saver';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');

  useEffect(() => {
    const generateExcerpt = () => {
      const div = document.createElement('div');
      div.innerHTML = content;
      const plainText = div.textContent || div.innerText || '';
      const truncatedText = plainText.trim().slice(0, 150) + '...';
      setExcerpt(truncatedText);
    };

    generateExcerpt();
  }, [content]);

  const handleDownload = () => {
    const fullContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}..."
author: "${author}"
---

${content}`;
    const blob = new Blob([fullContent], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, `${title}-blog-post.md`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-5">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="h-96 mb-20">
        <ReactQuill 
          value={content} 
          onChange={setContent}
          className="h-full"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-5">
        <h3 className="font-semibold mb-2">Excerpt Preview (first 150 characters):</h3>
        <p>{excerpt}</p>
      </div>
      <button 
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full md:w-auto"
      >
        Download as Markdown
      </button>
    </div>
  );
};

export default Editor;
