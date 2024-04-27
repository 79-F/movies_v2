import React from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();
  return (
    <div>
      <h1>SingleMovie {id}</h1>
    </div>
  );
}
export default SingleMovie;
