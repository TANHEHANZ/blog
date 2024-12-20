import React from "react";
import { useParams } from "react-router-dom";
import data from "../../service/mock.json";
import { DOWNLOAD } from "../../ui/public/icons";
import image from "../../img/noFountImg.png";
import Button from "../../ui/public/button";
import { ASSETS } from "../../service/pathMultimedia";

const Post = () => {
  const params = useParams();
  const ID = parseInt(params.id);
  const searchData = data.posts.find((element) => element.id === ID);
  const documentAttachment = searchData.attachments.find(
    (attachment) => attachment.type === "document"
  );
  const imageAttachment = searchData.attachments.find(
    (attachment) => attachment.type === "image"
  );

  return (
    <div className=" w-[80dvw] mt-[5rem] flex relative md:h-[calc(100dvh-6rem)] h-full justify-center items-center gap-8 flex-wrap ">
      <img
        src={
          ASSETS[imageAttachment.fileId]
            ? ASSETS[imageAttachment.fileId]
            : image
        }
        alt={imageAttachment}
        className="md:w-[calc(50%-2rem)] h-24 object-cover rounded-md md:h-full w-24 absolute md:relative top-0 right-0 border "
      />
      <article className="w-full md:w-1/2 h-full flex flex-col gap-4 items-start py-4">
        <h1 className="text-4xl  uppercase w-2/3 md:w-full">
          {searchData.title}
        </h1>
        <p>{searchData.description}</p>
        {documentAttachment && (
          <button className="text-sm py-2 px-4 cursor-pointer rounded-md border bg-Brown100 hover:bg-white transition-all duration-500 ease-in-out min-w-60  text-Brown700 flex justify-center items-center ">
            <a
              href={ASSETS[documentAttachment.fileId] || "#"}
              download={searchData.title || "archivo"}
              aria-label={`Descargar ${documentAttachment.title}`}
              className=" flex gap-4 justify-center items-center  "
            >
              <DOWNLOAD /> Descargar Documento
            </a>
          </button>
        )}
      </article>
    </div>
  );
};

export default Post;
