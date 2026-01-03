import { useEffect } from "react";
import { getPosts } from "./api/PostApi"


function App() {
  console.log(getPosts());

  const getPostData=async()=>{
    const res= await getPosts();
    console.log("res",res.data );
  }

  useEffect(() => {
    getPostData();
  },[]);
  return (
    <h1>Hello React Crud opration</h1>
  );
}

export default App;
