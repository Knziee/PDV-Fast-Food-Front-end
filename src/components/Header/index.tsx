import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { HeaderBackground, HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <Logo />
        <Nav />
      </HeaderContainer>
    </HeaderBackground>
  );
};
