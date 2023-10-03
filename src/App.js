
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.js';
import About from './Components/About';
import Gallery from './Components/Gallery';
import ApsCalculator from  './Components/ApsCalculator';
import Auth from './firebase-config/Auth.js';


import Blog from './Components/Blog';
import BlogPage from './Components/BlogPage';
import AllBlogPage from './Components/AllBlogPage';
import Footer from './Components/Footer';

// Blog images
import img1 from './assets/IMG1.JPG';
import img2 from './assets/IMG2.JPG';
import img3 from './assets/IMG3.JPG';
import img4 from './assets/IMG4.JPG';
import img5 from './assets/IMG5.JPG';

const blogPosts = [
  {
    title: 'Title one',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa atque officiis delectus nemo quidem',
    imageUrl: img1,
  },
  {
    title: 'Title two',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa atque officiis delectus nemo quidem',
    imageUrl: img2,
  },
  {
    title: 'Title one',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa atque officiis delectus nemo quidem',
    imageUrl: img3,
  },
  {
    title: 'Title one',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa atque officiis delectus nemo quidem',
    imageUrl: img4,
  },
  {
    title: 'Title one',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa atque officiis delectus nemo quidem',
    imageUrl: img5,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Auth/>
      <About/>
      <Router>
        <Routes>
          <Route path="/" element={<Blog blogPosts={blogPosts} />} />
          <Route path="/blog-page/:title" element={<BlogPage />} />
          <Route path="/all-posts" element={<AllBlogPage blogPosts={blogPosts} />} />
        </Routes>
      </Router>
      <Gallery/>
      <ApsCalculator/>
      <Footer/>
    </div>
    
    
  );
}

export default App;
