import { ButtonBackground, ButtonText } from "./styles";

interface ButtonsProps {
  background?: string;
  borderColor?: string;
  text?: string;
}

export const Button: React.FC<ButtonsProps> = ({
  background,
  borderColor,
  text,
}) => {
  return (
    <ButtonBackground
      backgroundColor={background}
      borderColor={borderColor}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonBackground>
  );
};
