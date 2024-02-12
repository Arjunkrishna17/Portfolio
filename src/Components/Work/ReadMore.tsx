import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

import data from "./ReadMoreData.json";

const ReadMore = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const projectDetails = data[id?.toString() as keyof typeof data];

  return (
    <div className="flex flex-col space-y-5 py-5 px-10 overflow-auto ">
      <div className="flex w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 hover:bg-gray-200 px-5 py-1 rounded-xl border"
        >
          Go back
        </button>
      </div>

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
