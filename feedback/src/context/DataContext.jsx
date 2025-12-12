import { createContext, useState, useEffect } from "react";
import api from "../api/Post";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchData = async () => {
    const res = await api.get("/feedback");
    setPosts(res.data);
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
    e.preventDefault();

    const newObj = {
      id: posts.length + 1,
      title,
      body,
    };

    await api.post("/feedback", newObj);

    setTitle("");
    setBody("");
    fetchData();
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
