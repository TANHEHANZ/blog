import Card from "../../ui/public/card";
import data from "../../service/mock.json";
import image from "../../img/noFountImg.png";
import { DOWNLOAD, PEOPLE } from "../../ui/public/icons";
import { ASSETS } from "../../service/pathMultimedia";
const Body = () => {
  return (
    <div>
      <section
        data-entrie="element"
        className="h-auto relative flex flex-wrap gap-4 min-h-[50dvh] p-8 justify-center w-full "
      >
        {data.posts.map((post) => (
          <Card path={post.id}>
            {post.attachments.map((attachment, index) => (
              <section key={index}>
                {attachment.type === "image" ? (
                  <img
                    src={
                      ASSETS[attachment.fileId]
                        ? ASSETS[attachment.fileId]
                        : image
                    }
                    alt={attachment.description}
                    className="h-[14rem] object-cover w-full group-hover:scale-110 transition-all ease-in-out delay-50"
                    style={{
                      filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 30%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, black 30%, transparent 100%)",
                    }}
                  />
                ) : (
                  <a
                    href={ASSETS[attachment.fileId] || "#"}
                    className="z-50 absolute top-4 right-4 p-4 bg-white border rounded-md hover:bg-Brown500 hover:text-white transition-all ease-in-out delay-200"
                    download={post.title || "archivo"}
                    aria-label={`Descargar ${post.title}`}
                  >
                    <DOWNLOAD />
                  </a>
                )}
              </section>
            ))}
            <div
              className=" p-4 flex flex-col gap-2 transition-all duration-500 text-sm "
              key={post.id}
            >
              <h2 className="text-md font-semibold text-Brown500 uppercase">
                {post.title}
              </h2>

              <p className=" flex items-center gap-2 text-Brown100">
                <small className="inline-flex items-center gap-2 text-[12px]  ">
                  <PEOPLE />
                  {post.author} | <p>{post.date}</p>
                </small>
              </p>
              <p className="text-white">{post.description.slice(0, 60)}...</p>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Body;
