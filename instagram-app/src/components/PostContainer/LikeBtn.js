import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function LikeBtn(props) {
  const clickHandler = e => {
    props.likeToggle(e);
  };

  return (
    <>
      <FontAwesomeIcon
        onClick={clickHandler}
        className="like-btn"
        size="2x"
        icon={faHeart}
      />
    </>
  );
}

export default LikeBtn;
