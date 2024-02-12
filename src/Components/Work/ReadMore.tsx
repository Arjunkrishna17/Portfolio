import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import data from "./ReadMoreData.json";

const ReadMore = () => {
  const { id } = useParams();

  const projectDetails = data[id?.toString() as keyof typeof data];

  return (
    <div className="flex flex-col space-y-5 py-5 px-10 overflow-auto">
      <h1 className="font-bold text-xl">{projectDetails.name}</h1>
      <div className="flex w-full items-center justify-center pt-5">
        {projectDetails.video ? (
          <video autoPlay={true} width="640" height="360" controls muted>
            <source
              src={require("../../Video/" + projectDetails.video)}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={require("../../Images/" + projectDetails.photo)} alt="" />
        )}
      </div>

      {parse(projectDetails.description)}
    </div>
  );
};

export default ReadMore;
