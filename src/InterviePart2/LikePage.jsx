import { HeartIcon } from "./icons";
import React, { useState } from "react";

export const LikePage = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeUnlike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button className={`likedBtn? "li: ""  `} onClick={handleLikeUnlike}>
        <HeartIcon /> {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
};
