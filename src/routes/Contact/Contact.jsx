import style from "./Contact.module.css";

import popcorn from "../../assets/pipoca.jpg";

const Contact = () => {
  return (
    <div className={style.container}>
      <h3>Entre em contato com nossa equipe🤗</h3>
      <div className={style.forms}>
        <div className={style.name}>
          <h4>nome</h4>
          <input placeholder="Insira seu nome" type="Insira seu nome completo" />
        </div>
        <div className={style.email}>
          <h4>E-mail</h4>
          <input placeholder="Isira seu e-mail" type="Insira seu e-mail" />
        </div>
        <div className={style.problema}>
          <h4>Informe seu problema</h4>
          <input placeholder="Máximo de 400 palaras" type="Máximo de 400 palavras" />
        </div>
        <div className={style.btn}>
          <button>Enviar</button>
        </div>
      </div>
      <div>
        <img src={popcorn} alt="" />
      </div>
    </div>
  );
};

export default Contact;
