import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";

const HeightContainer = () => {
  const [easybaseData, setEasybaseData] = useState([]);
  const { db } = useEasybase();

  const mounted = async () => {
    const randNum = Math.floor(Math.random() * (640 - 0 + 1)) + 0;
    const ebData = await db("PEOPLE").return().limit(1).offset(randNum).all();
    setEasybaseData(ebData);
    console.log("DATA", easybaseData);
  };

  useEffect(() => {
    mounted();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {easybaseData.map((ele) => {
        console.log(ele);
        return (
          <div>
            <img src={ele.imglink} height="250" width="150" />
            <h4>{ele.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default HeightContainer;
