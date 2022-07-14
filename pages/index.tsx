import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/Meta";

const index = () => {
  return (
    <>
      <Meta />
      <h2 className="text-red-500">
        Hello next <FontAwesomeIcon icon={faCode} />{" "}
      </h2>
    </>
  );
};

export default index;
