import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import axios from "./axios";

const API="http://jsonplaceholder.typicode.com";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  //Using PROMISES
  // useEffect(() => {
  //   axios
  //     .get("http://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data)).catch((error)=>setIsError(error.message));
  // }, []);

  //Using Async Await

  const getApiData=async(c)=>{
   try {
     const res=await axios.get(c);
     setMyData(res.data)
   } catch (error) {
    setIsError(error.message)
   }
  }
  useEffect(()=>{
    getApiData(`${API}/posts`)
  },[])

  return (
    <>
      <h1>Axios learning</h1>
      {isError !=="" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.slice(0,12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0,12).toUpperCase()}</h2>
              <p>{body.slice(0,110)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
