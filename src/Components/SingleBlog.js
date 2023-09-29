import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const SingleBlog = ({ title, content, imageUrl }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleReadMore = () => {
    // Use navigate to go to the "BlogPage" route with the current props
    navigate(`/blog-page/${title}`, {
      state: {
        title,
        content,
        imageUrl,
      },
    });
  };

  return (

    <div className="bg-white flex flex-col items-center shadow-md p-4 mb-4">
      <img src={imageUrl} alt={title} className="w-full h-auto mb-2" />
      <h3 className="text-xl font-semibold text-gray-800 text-center" >{title}</h3>
      <div class="flex items-center justify-center py-2">
          <div class="border-t-2 border-red-800 w-12"></div>
        </div>
      <p className="text-gray-600 text-13" >{content}</p>

      <button className='text-red-900 border border-red-900 text-center  w-[200px] font-smaller my-6 ml-12 md:mx-0 px-5 py-3' onClick={handleReadMore}>READ MORE</button>
    </div>
  );
}

export default SingleBlog;
