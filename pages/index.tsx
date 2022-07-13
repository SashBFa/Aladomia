import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div>
      <h2>
        Hello next <FontAwesomeIcon icon={faCode} />{" "}
      </h2>
    </div>
  );
};

export default index;
