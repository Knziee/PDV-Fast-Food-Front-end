import { ButtonBackground, ButtonText } from "./styles";

interface ButtonsProps {
  background?: string;
  borderColor?: string;
  text?: string;
  width?: string;
  height?: string;
  color?: string;
}

export const Button: React.FC<ButtonsProps> = ({
  background,
  borderColor,
  text,
  width,
  height,
  color,
}) => {
  return (
    <ButtonBackground
      backgroundColor={background}
      borderColor={borderColor}
      width={width}
      height={height}
      color={color}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonBackground>
  );
};
