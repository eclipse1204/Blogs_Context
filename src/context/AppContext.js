import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const AppContext=createContext();

export default function AppContextProvider({children})
{
    const [loading,setLoading]=useState(true);
    const [pageNumber,setPageNumber]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const [posts,setPosts]=useState([]);
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setReletedBlogs] = useState([]);
    const navigate=useNavigate();
    const location=useLocation();
    const [searchParams,setSearchParams]=useSearchParams();
    const newBaseURL="https://codehelp-apis.vercel.app/api/";

    async function fetchData(page=1)
    {
        let tag=null;
        let category=null;
        let blogId=null;
        if(location.pathname.includes("tags"))
        {
            tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
        }
        else if(location.pathname.includes("categories"))
        {
            category=location.pathname.split("/").at(-1).replaceAll("-"," ");
        }
        else if(location.pathname.includes("blogs"))
        {
            blogId=location.pathname.split("/").at(-1).replaceAll("-"," ");
        }
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try{
            if(tag!=null)
            {
                url+=`&tag=${tag}`;
            }
            else if(category!=null)
            {
                url+=`&category=${category}`;
            }
            else if(blogId!=null)
            {
                url=`${newBaseURL}get-blog?blogId=${blogId}`;
            }
            if(blogId!==null)
            {
                console.log("URL: "+url);
                const res=await fetch(url);
                const output=await res.json();
                console.log(output);
                setBlog(output.blog);
                setReletedBlogs(output.relatedBlogs);
            }
            else
            {
                console.log("URL: "+url);
                const res=await fetch(url);
                const output=await res.json();
                console.log(output);
                setPageNumber(output.page);
                setTotalPages(output.totalPages);
                setPosts(output.posts);
            }
        }
        catch(error){
            setPageNumber(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        console.log("useEffect hook triggered");
        const page=searchParams.get("page") ?? 1;
        fetchData(page);
    },[location.pathname,location.search]);

    function handleClick(page)
    {
        navigate({search:`?page=${page}`});
    }

    const value={
        loading,
        setLoading,
        pageNumber,
        setPageNumber,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        handleClick,
        fetchData,
        blog,
        relatedBlogs
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}