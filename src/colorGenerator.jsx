import { useState } from "react";
import { useEffect } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState("");

  const generateRandomColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase();
    setColor(randomColor);
    // console.log(randomColor);
  };
  useEffect(() => {
    generateRandomColor(); // Generate a random color when the component mounts
  }, []);
  return (
    <div
      style={{
        // border: "2px solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "300px",
          height: "300px",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          //   border: "2px solid",
        }}
      >
        <div
          className="colorBox"
          style={{
            backgroundColor: color,
            width: "200px",
            height: "200px",
            margin: "20px auto",
          }}
        ></div>
        <h2>{color}</h2>
      </div>
      <button
        onClick={generateRandomColor}
        style={{
          padding: "10px",
          borderRadius: "25px",
          border: "none",
          background: "grey",
          color: "white",
        }}
      >
        Try Another
      </button>
    </div>
  );
};

export default ColorGenerator;
