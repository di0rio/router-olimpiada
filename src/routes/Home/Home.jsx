import style from "./Home.module.css";

import React, { useState, useEffect } from "react";

import mine from "../../assets/mine.jpg";
import red from "../../assets/red-dead.webp";

import Swal from "sweetalert2";

const Home = () => {
  const handleClick = async () => {
    const resultado = await fetch("Comprado!");

    Swal.fire({
      background: "black",
      color: "white",
      title: "Cinema João🍿",
      text: "Ingresso Comprado!",
      icon: "info",
      iconColor: "lime",
      confirmButtonText: "Ok",
      confirmButtonColor: "lime",
      imageUrl:
        "https://anajustrafederal.org.br/_midias/png/2023/08/18/1600x533/1_170823_convenios_topo-117943.png",
      imageWidth: "20em",
    });
  };

  return (
    <div>
      <div>
        <h3>Filmes em cartaz no momento</h3>
      </div>
      <div className={style.movies}>
        <div className={style.card}>
          <div>
            <img src={mine} alt="capa minecraft filme." />
            <p>R$ 2000,00</p>
          </div>
        </div>
        <div className={style.card}>
          <div>
            <img src={red} alt="capa redDead" />
            <p>R$2000000000,00</p>
            <button onClick={handleClick} className={style.btn2}>
          Comprar ingresso
        </button>
          </div>
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
