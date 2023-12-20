import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const navigate=useNavigate();
  const {loading,blog,relatedBlogs}=useContext(AppContext);
  console.log(blog);
  console.log(relatedBlogs);
  
  return (
    <div className="my-[100px]">
      <Header />
      <div className="w-11/12 mx-auto flex flex-col items-center">
        <div className="relative -left-80">
          <button className="border-2 border-gray-300 py-1 px-4 rounded-md mb-6" onClick={() => navigate(-1)}>Back</button>
        </div>
        <div>
          {loading ? (
            <Spinner />
          ) : blog ? (
            <div >
              <BlogDetails post={blog} />
              <h2 className="text-2xl font-bold my-10">Releated Blogs</h2>
              <div className="flex flex-col gap-y-8">
                {relatedBlogs.map((post) => (
                  <div key={post.id} >
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
