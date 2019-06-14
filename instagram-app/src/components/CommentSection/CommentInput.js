import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default function CommentInput() {
  return (
    <div className="comment-input input-group">
      <input type="text" class="form-control" placeholder="Add a comment..." />
      <div class="input-group-append">
        <FontAwesomeIcon size="lg" icon={faEllipsisH} />
      </div>
    </div>
  );
}
