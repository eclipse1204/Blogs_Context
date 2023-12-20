import React from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

function Home() {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default Home