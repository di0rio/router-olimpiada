import style from "./Sobre.module.css";

import ticket from "../../assets/img.ticket.jpg"

const Sobre = () => {
  return (
    <div>
      <div>
        <h4>
          O Cinema [nome do cinema] é um novo cinema localizado em [cidade,
          estado]. O cinema foi inaugurado em [data] e oferece uma experiência
          cinematográfica única para seus clientes. O cinema conta com [número]
          salas de cinema, todas equipadas com as mais modernas tecnologias. As
          salas são espaçosas e confortáveis, com poltronas reclináveis e
          sistema de som surround. O Cinema [nome do cinema] também oferece uma
          variedade de serviços para seus clientes, incluindo: Bilheteria online
          Cardápio com comidas e bebidas Estacionamento Wi-Fi gratuito O Cinema
          [nome do cinema] é o local perfeito para assistir a filmes com amigos
          e familiares. O cinema oferece uma experiência cinematográfica
          inesquecível para todos os públicos.
        </h4>
      </div>
      <div>
        <img src={ticket} alt="" />
      </div>
    </div>
  );
};

export default Sobre;
