import { useState } from "react";
import { HeartIcon } from "./icons";

export const LikeBtn = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button className={`likedBtn`}>
        <HeartIcon /> {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
};
