import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">

      {/* Header */}

      <div className="flex items-center p-5">
        <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 w-5 text-gray-800" />
      </div>
    
      {/* img */}

      <img src={img} className="object-cover w-full" alt="" />

      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-3">
          <HeartIcon className="postBtn"/>
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>


      {/* caption */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username} </span> {caption}
        </p>
      </div>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
        
      </form>
    </div>
  )
}

export default Post
