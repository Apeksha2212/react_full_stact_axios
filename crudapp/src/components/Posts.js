import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/PostApi';
import './Posts.css';

 // Adjust the path as needed

const Posts = () => {
const [data,setData]=useState([]);

    const getPostData=async()=>{
        const res=await getPosts();
        console.log("Post data",res.data);
        setData(res.data);
       }
     useEffect(() => {
        getPostData();
      },[]);
  return (
   <section>
    <ul>
      {
        data.map((curelm) => {
            const { id, body, title } = curelm;
            return (
                <li key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            );
        })
      }
    </ul>
   </section>
   
  )
}

<<<<<<< Updated upstream
export default Posts
=======
          return (
            <li key={id}>
              <div>
                <h4>Post : {id}</h4>
                <h3>Title : {title}</h3>
                <p> {body}</p>

                <button>Edit</button> 

                {/* 👇 pass id here */}
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
>>>>>>> Stashed changes
