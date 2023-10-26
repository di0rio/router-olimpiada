import style from "./Home.module.css";

import React, { useState, useEffect } from "react";

import mine from "../../assets/mine.jpg";

const Home = () => {
  const [value, setValue] = useState("");

  const handleClick = async () => {

    const resultado = await fetch("Comprado!");

    alert({
      title: "Compra concluída",
    });
  };

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
        <button onClick={handleClick} className={style.btn}>
          Comprar ingresso
        </button>
      </div>
    </div>
  );
};

export default Home;
