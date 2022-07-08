import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { HeaderBackground, HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
      </HeaderContainer>
    </HeaderBackground>
  );
};
