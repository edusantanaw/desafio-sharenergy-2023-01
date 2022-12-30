import React, { useRef, useState } from "react";
import { statusCode } from "../../util/statusCodeList";
import { CatContainer } from "./cat.styles";
import catAnimation from "../../assets/cats.json";
import Lottie from "lottie-react";

const Cat = () => {
  const [status, setStatus] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  function handleVisible() {
    visible ? setVisible(false) : setVisible(true);
  }

  function handleStatus(status: number) {
    setStatus(status);
    handleVisible();
  }

  const defaultConfig = {
    loop: true,
    autoplay: true,
    animationData: catAnimation,
  };

  return (
    <CatContainer>
      <div className="status">
        <h1>Cats by status</h1>
        <span onClick={handleVisible}>
          {status ? `Current status: ${status}` : "Select status code"}
        </span>
        {visible && (
          <ul className="list">
            {statusCode.map((statu) => (
              <li onClick={() => handleStatus(statu)}>status: {statu}</li>
            ))}
          </ul>
        )}
      </div>
      {status ? (
        <img src={`https://http.cat/${status}`} />
      ) : (
        <Lottie id="cat" {...defaultConfig} style={{ width: "20em" }} />
      )}
    </CatContainer>
  );
};

export default Cat;
