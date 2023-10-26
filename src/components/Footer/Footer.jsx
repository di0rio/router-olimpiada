import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.link}>
        <p>
          Feito por{" "}
          <a href="https://github.com/di0rio?tab=repositories">di0rio</a> com ❤️
        </p>
      </div>
      {/* <div className={style.socialinks}>
        <ion-icon href="" name="logo-instagram"></ion-icon>
        <ion-icon href="#" name="logo-whatsapp"></ion-icon>
        <ion-icon href="#" name="logo-twitter"></ion-icon>
      </div> */}
    </div>
  );
};

export default Footer;
