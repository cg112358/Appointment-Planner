import React from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = ({ tile = [] }) => {
  return (
    <div>
      {tile.map((obj, idx) => {
        // Flexable name, supports either 'name' or 'title as primary label.
        const name = obj.name ?? obj.title ?? (Object.values(obj)[0] ?? "");

        // Everything else becomes the description lines
        const description = Object.entries(obj).filter(([k]) => k !== "name" && k !== "title").map(([, v]) => String(v));
        return <Tile key={idx} name={name} description={description} />;
      })} 
    </div>
  );
};
