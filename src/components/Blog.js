import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blog = ({ blogPosts }) => {
  const [displayedPosts, setDisplayedPosts] = useState(3); // Number of posts to initially display
  const navigate = useNavigate();

  const loadMorePosts = () => {
    navigate('/all-posts'); 
  };

  return (
    <section className="bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-800 mb-4 py-2 justify-center text-center">Blogs</h2>
        <div class="flex items-center justify-center py-2">
          <div class="border-t-2 border-red-800 w-16"></div>
        </div>
        <p className='text-center text-black font-small py-2'>Lorem ipsum dolor sit amet consectetur. Lorem donec interdum elit sit porttitor et consequat. 
          Urna ullamcorper suspendisse auctor lorem diam quis. Adipiscing donec ultrices at et non sed.</p>
        <div className='border-red-800 w-full rounded-md'></div>
        <div className="flex flex-wrap -mx-4 py-2">
          {blogPosts.slice(0, displayedPosts).map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <SingleBlog title={post.title} content={post.content} imageUrl={post.imageUrl} />
            </div>
          ))}
        </div>
        {displayedPosts < blogPosts.length && (
          <button
            onClick={loadMorePosts}
            className="bg-red-800 text-white px-4 py-2 mt-4 hover:bg-red-800 justify-center ml-[640px]"
          >
            MORE POSTS
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;
