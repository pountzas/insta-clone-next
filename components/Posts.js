import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from "./Post"
import { useState, useEffect } from "react";
import { db } from "../firebase";

const posts = [
  // {
  //   id: 123,
  //   username: "johndoe",
  //   userImg: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  //   img: "https://scontent.fath4-2.fna.fbcdn.net/v/t1.6435-9/69653002_1359714994183293_2319988488298037248_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=ZpN6J-voB6AAX8bRF7X&_nc_ht=scontent.fath4-2.fna&oh=00_AT-5qqpgtx40OCMaari6t69QBdDDphXcOO6YndgfPGwb1A&oe=61FD6593",
  //   caption: "oh la la!!!",
  // },
  // {
  //   id: 123,
  //   username: "johndoe",
  //   userImg: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  //   img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
  //   caption: "wtf for a caption?",
  // },
]

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
      setPosts(snapshot.docs);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  // refactored code

  // useEffect(
  //   () => 
  //     onSnapshot(
  //       query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  //       (snapshot) => {
  //         setPosts(snapshot.docs);
  //       }
  //     ),
  //   [db]
  // );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}  
        />

      ))}
    </div>
  )
}

export default Posts
