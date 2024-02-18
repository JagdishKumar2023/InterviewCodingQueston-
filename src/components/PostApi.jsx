import React, { useEffect, useState } from "react";

export const PostApi = () => {
  const [pageApi, setPage] = useState(1);
  const [postsApi, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/post/${pageApi}`
    );
    const posts = await res.json();
    setPosts(posts);
  };

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const handleSumit = () => {
    fetchPosts();
  };

  return (
    <PostComponent
      value={pageApi}
      data={postsApi}
      handlePageChange={handlePageChange}
      handleSumit={handleSumit}
    />
  );
};
