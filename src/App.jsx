
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes , useSearchParams,useLocation } from 'react-router-dom'
import TagPage from "./Pages/TagPage.jsx";
import Home from "./Pages/Home.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  

  useEffect(()=>{
    const page = searchParams.get("page") ??  1 ;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      
      fetchBlogPosts(Number(page),tag);
      
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }else{
      fetchBlogPosts(Number(page));

    }
  },[location.pathname,location.search])

  return (
   <div >
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/blog/:blogId' element = {<BlogPage/>}/>
      <Route path='/categories/:category' element = {<CategoryPage/>}/>
      <Route path='/tags/:tag' element = {<TagPage/>}/>
    </Routes>
   </div>
  )
}

export default App
