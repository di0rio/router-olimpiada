import { Link } from "react-router-dom"

const navigation = [
  { componente: "/", name: "Home" },
  { componente: "/contact", name: "Contato" },
  { componente: "/sobre", name: "Sobre" },
];

const Header = () => {
  return (
    <div>
      <div>
        <nav>
          {navigation.map((nav) => (
            <Link key={nav.name} to={nav.componente}>{nav.name}</Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header