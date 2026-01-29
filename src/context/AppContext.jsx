import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl"

//step 1 create
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    // console.log(page)



    async function fetchBlogPosts(page) {
        setLoading(true);
        let url = baseUrl
        try {
            const result = await fetch(`${url}?page=${page}`);
            const data = await result.json();
            console.log(data)
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)


        } catch (error) {
            console.error("Error while fetchin data ", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }

        setLoading(false);
    }



    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }




    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts,
    }



    // step 2 provide

    return <AppContext.Provider value={value}> {children}</AppContext.Provider>



}