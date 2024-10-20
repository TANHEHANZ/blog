import Body from "./sections/body";
import Heder from "./sections/heder";

const Home = () => {
  return (
    <>
      <Heder />
      <div className=" mx-auto relative ">
        <Body />
      </div>
    </>
  );
};

export default Home;
