import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.link}>
        <p> Feito com ❤️ por </p><a href="https://github.com/di0rio"> di0rio</a>
      </div>
    </div>
  )
}

export default Footer