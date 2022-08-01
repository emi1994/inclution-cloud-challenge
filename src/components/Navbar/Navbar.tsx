import { MainNavbar, Text } from "./navbar.styles"
import { TextType } from "./type"

const Navbar = ({ text }: TextType) => {
  return (
    <MainNavbar>
      <Text>{text}</Text>
    </MainNavbar>
  )
}

export default Navbar