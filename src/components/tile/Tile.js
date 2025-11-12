import React from "react";

export const Tile = ({ name, description = {} }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((val, i) => (
        <p key={i} className="tile">
          {String(val)}      
        </p>
      ))}
    </div>
  );
};
