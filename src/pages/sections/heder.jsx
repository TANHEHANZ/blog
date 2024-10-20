const Heder = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center relative flex-col carroucel"
      style={{
        animation: "fadeCarousel 18s infinite",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute w-full h-full bg-blue-900/30 z-[1]"></div>

      <section>
        <h1
          className={`lg:text-[4rem] text-3xl font-extrabold z-10 self-start flex flex-col uppercase text-Brown700 text-center  gap-4 `}
        >
          Procesos Notariales
          <small className="text-lg text-Brown100">Legalmente Claro</small>
          <small className=" text-Brown500 text-3xl">Recursos ahora digitales</small>
        </h1>
      </section>
    </div>
  );
};

export default Heder;
