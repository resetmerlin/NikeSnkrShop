import React from "react";

const Message = ({ children }) => {
  return (
    <div className="message">
      <div>{children}</div>
    </div>
  );
};

export default Message;
