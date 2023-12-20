import React, { useContext } from 'react';
import Spinner from '../components/Spinner'
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';

function BlogPage() {
  const {loading,posts}=useContext(AppContext); //consume context
  // console.log(posts);
  return ( 
    <div className="my-[100px]">
      <div className="flex flex-col gap-y-10 my-4">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <p className="font-bold text-3xl text-center my-[200px]">
            Data Not Found
          </p>
        ) : (
          posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default BlogPage