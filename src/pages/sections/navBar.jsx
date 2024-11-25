import { Link, useParams } from "react-router-dom";
// import useObserver from "../../hooks/useObserver";
import Button from "../../ui/public/button";
import logo from "../../img/Logo.png";

const NavBar = () => {
  // useObserver({
  //   selector: "#nav",
  //   sectionSelector: "section[data-entrie='element']",
  //   classToAddOnEnter: "move-in",
  //   classToAddOnExit: "move-out",
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.4,
  // });
  const params = useParams();
  const ID = parseInt(params.id);

  return (
    <>
      <nav
        className="fixed top-0 flex gap-8  h-16  items-center text-sm  mx-auto px-8 shadow-md z-50 overflow-hidden w-full"
        id="nav"
      >
        <section className=" flex  items-center z-50 w-full justify-between">
          <Link to="/" className="flex gap-4 w-40 cursor-pointer">
            <img src={logo} alt="logo" className="h-20" />
          </Link>
          <Button className="text-Brown500 uppercase text-[11px]">
            <Link to={ID ? "/" : "/login"}>{ID ? "volver" : "Nuevo post"}</Link>
          </Button>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
