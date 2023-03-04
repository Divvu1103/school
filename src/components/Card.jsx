import React from "react";

const Card = ({ name, content }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
