import { Link } from "react-router-dom"

import style from "./Header.module.css"

import logo from "../../assets/logoCine.jpg"

const navigation = [
  { componente: "/", name: "Home" },
  { componente: "/contact", name: "Contato" },
  { componente: "/sobre", name: "Sobre" },
];

const Header = () => {
  return (
    <div className={style.container}>
      <div>
        <img src={logo} alt="logo fita de cinema" />
      </div>
      <div>
        <h1>Cinema João</h1>
      </div>
      <div>
        <nav className={style.links}>
          {navigation.map((nav) => (
            <Link className={style.link} key={nav.name} to={nav.componente}>{nav.name}</Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header