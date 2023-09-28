
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import About from './components/About';
//import Gallery from './components/Gallery';
import ApsCalculator from  './components/ApsCalculator'
import GalleryPage from  './components/GalleryPage';

//import Blog from './components/Blog';
//import BlogPage from './components/BlogPage';
//import AllBlogPage from './components/AllBlogPage';

// Blog images
{/*import img1 from './assets/IMG1.JPG';
import img2 from './assets/IMG2.JPG';
import img3 from './assets/IMG3.JPG';
import img4 from './assets/IMG4.JPG';
import img5 from './assets/IMG5.JPG';*/}

{/*const blogPosts = [
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
];*/}

function App() {
  return (
    <Router>
      <div className="App">
        <TopHeader />
        <Header />
        <Hero />
        <About />
       <GalleryPage/>
       < ApsCalculator/>
        {/*<Routes>
          <Route path="/" element={<Blog blogPosts={blogPosts} />} />
          <Route path="/blog-page/:title" element={<BlogPage />} />
          <Route path="/all-posts" element={<AllBlogPage blogPosts={blogPosts} />} />
        </Routes>*/}
      </div>
    </Router>
  );
}

export default App;
