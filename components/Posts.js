import Post from "./Post"

const posts = [
  {
    id: 123,
    username: "johndoe",
    userImg: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
    img: "https://images.unsplash.com/photo-1588795909872-b8b9c8f8d8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    caption: "wtf for a caption?",
  },
  {
    id: 123,
    username: "johndoe",
    userImg: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
    img: "https://images.unsplash.com/photo-1588795909872-b8b9c8f8d8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    caption: "wtf for a caption?",
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}  
        />

      ))}
    </div>
  )
}

export default Posts
