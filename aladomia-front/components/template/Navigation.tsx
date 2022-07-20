import {
  faBasketShopping,
  faEllipsisV,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { roads } from "../../utils/roads";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  console.log(scrollValue);

  const onScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isOpen ? setIsOpen(false) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollValue]);

  useEffect(() => {
    const clickOut = (e: Event) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOut);
    return () => {
      document.addEventListener("mousedown", clickOut);
    };
  }, [isOpen]);

  return (
    <nav className="mt-12 px-6 z-20">
      <div ref={ref}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed right-6 border-2 rounded-full w-10 h-10 text-2xl drop-shadow-md shadow-md select-none transition-all duration-500 ease-in-out ${
            isOpen ? "-rotate-90" : "rotate-0"
          } ${
            (scrollValue >= 658 && router.pathname === "/") ||
            router.pathname !== "/"
              ? "text-amber-400 border-amber-400"
              : "text-white border-white"
          }`}
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
        <div
          className={`fixed bg-white/80 top-0 w-52 h-screen transition-all duration-500 ease-in-out shadow-md flex flex-col px-6 ${
            isOpen ? "left-0 opacity-100" : "-left-52 opacity-0"
          } `}
        >
          <span className="h-52 w-full border border-black my-12">LOGO</span>
          <ul className="flex flex-col h-full">
            {roads.map((road) => (
              <Link key={road.id} href={road.link}>
                <li
                  onClick={() => setIsOpen(!isOpen)}
                  className={`border border-amber-400 h-full flex flex-col justify-center items-end px-4 my-2 rounded-sm shadow-md hover:translate-x-10 ${
                    road.link === "/shop"
                      ? "bg-amber-400 text-white"
                      : "bg-white text-amber-400 "
                  }`}
                >
                  <a className=" text-xl drop-shadow-md font-light">
                    {road.name}
                  </a>
                </li>
              </Link>
            ))}
            <li className="flex justify-around px-4">
              <Link href={"/profil"}>
                <button
                  className="border-2 rounded-full w-10 h-10 border-amber-400 text-amber-400 text-2xl my-6 text-center p-5 flex items-center justify-center shadow-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </Link>
              <Link href={"/cart"}>
                <button
                  className="border-2 rounded-full w-10 h-10 border-amber-400 text-white bg-amber-400 text-2xl my-6 text-center p-5 flex items-center justify-center shadow-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {router.pathname === "/" ? (
          <h1
            className={`absolute text-white text-5xl translate-x-1/2 drop-shadow-md transition-all duration-500 ease-in-out ${
              isOpen ? "left-12 rotate-90 top-60" : "left-0 rotate-0 top-1/2"
            }`}
          >
            Aladom<b className="text-amber-400 font-medium">i</b>a
          </h1>
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
