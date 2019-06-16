import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default function LikeBtn() {
  return (
    <>
      <FontAwesomeIcon className="comment-btn" size="2x" icon={faComment} />
    </>
  );
}
