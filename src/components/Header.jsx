
const Header = ( {title, image}) => {
  return (
    <header>
        <h1>{title}</h1>
        <img src={image} alt="" />
    </header>
  )
}

export default Header