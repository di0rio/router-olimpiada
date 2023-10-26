import style from "./Home.module.css";

import React, { useState, useEffect, useRef } from "react";

import mine from "../../assets/mine.avif";

const Home = () => {
  // const [comprado, setComprado] = useState(false);
  // const [alertOpen, setAlertOpen] = useState(false);
  // const alertRef = useRef(null);

  // const handleClick = async () => {
  //   setComprado(true);

  //   const alert = await alert("Comprado!");
  //   alertRef.current = alert;

  //   setAlertOpen(true);
  // };

  // useEffect(() => {
  //   if (comprado && alertOpen) {
  //     alertRef.current.close();
  //   }
  // }, [comprado, alertOpen]);

  return (
    <div>
      <div>
        <h3>Filmes em cartaz no momento</h3>
      </div>
      <div className={style.card}>
        <div>
          <img src={mine} alt="capa minecraft filme." />
          <p>R$ 2000,00</p>
        </div>
      </div>
      <div className={style.btnLocal}>
        {/* <button onClick={handleClick} className={style.btn}> */}
        <button className={style.btn}>
          Comprar ingresso
        </button>
        {/* {comprado && alertOpen && alertRef.current} */}
      </div>
    </div>
  );
};

export default Home;
