import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function LikeBtn() {
  return (
    <>
      <FontAwesomeIcon className="like-btn" size="2x" icon={faHeart} />
    </>
  );
}
