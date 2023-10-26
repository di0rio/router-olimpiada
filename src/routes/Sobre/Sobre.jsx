import style from "./Sobre.module.css";

import ticket from "../../assets/img.ticket.jpg";

const Sobre = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.ticket}>
          <img src={ticket} alt="" />
        </div>
        <h2>Sobre nós</h2>
        <h4>
          O Cinema João é um novo cinema localizado em Jaú. O cinema foi
          inaugurado em recentemente e oferece uma experiência cinematográfica
          única para seus clientes. O cinema conta com 6 salas de cinema, todas
          equipadas com as mais modernas tecnologias. As salas são espaçosas e
          confortáveis, com poltronas reclináveis e sistema de som surround. O
          Cinema também oferece uma variedade de serviços para seus clientes,
          incluindo: Bilheteria online Cardápio com comidas e bebidas
          Estacionamento Wi-Fi gratuito O Cinema João é o local perfeito para
          assistir a filmes com amigos e familiares. O cinema oferece uma
          experiência cinematográfica inesquecível para todos os públicos.
        </h4>
      </div>
    </div>
  );
};

export default Sobre;
