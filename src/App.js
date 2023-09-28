import './App.css';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import AllBlogPage from './components/AllBlogPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import image1 from './images/IMG_8009.JPG';
import image2 from './images/IMG_8028.JPG';
import image3 from './images/IMG_8114.JPG';
import image4 from './images/IMG_8160.JPG';
import image5 from './images/IMG_8165.JPG';

function App() {

  const blogPosts = [
    {
      title: 'First Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: image1
    },
    {
      title: 'Second Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image2
    },
    {
      title: 'Third blog post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image3
    },
    {
      title: 'Forth Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image4
    },
    {
      title: 'Firth Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image5
    },
    {
      title: 'Firth Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image5
    },
    {
      title: 'Firth Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image5
    },
    {
      title: 'Firth Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image5
    },
    {
      title: 'Firth Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl:image5
    }

  
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog blogPosts={blogPosts}/>} />
        <Route path="/blog-page/:title" element={<BlogPage />} />
        <Route path="/all-posts" element={<AllBlogPage blogPosts={blogPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
