import React, { useEffect, useState } from 'react'
import { deletPost, getPosts } from '../api/PostApi';
import './Posts.css';

const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPosts();
    console.log("Post data", res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) {
      return;
    }
    deletPost(id)
      .then(() => {
        setData((prev) => prev.filter((post) => post.id !== id));
        alert("Post deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <section>
      <ul>
        {data.map((curelm) => {
          const { id, body, title } = curelm;

          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>{body}</p>

              <button>Edit</button>

              {/* 👇 pass id here */}
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
