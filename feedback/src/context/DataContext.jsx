import { createContext, useState, useEffect } from "react";
import api from "../api/Post";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const nav = useNavigate();
  const fetchData = async () => {
    const res = await api.get("/feedback");
    setPosts(res.data.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.includes(search)
    );
    setSearchResult(result);
  }, [search, posts]);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const newObj = {
        id: posts.length + 1,
        title,
        body,
      };

      await api.post("/feedback", newObj);

      setTitle("");
      setBody("");
      setPosts((prevPosts) => [...prevPosts, newObj]);
      nav("/");
      fetchData();
      alert("Post added successfully!");
    }
    catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post. Please try again.");
      setTitle("");
      setBody("");
      nav("/");
      fetchData();
    }
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        fetchData,
        search,
        setSearch,
        searchResult,
        title,
        setTitle,
        body,
        setBody,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
