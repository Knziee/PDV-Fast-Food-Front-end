import {
  ButtonIconRemove,
  ButtonsWrapper,
  KitchenButtonBackground,
} from "./styles";

interface KitchenButtonProps {
  background?: string;
}

export const KitchenReadyButton: React.FC<KitchenButtonProps> = ({
  background,
}) => {
  return (
    <ButtonsWrapper>
      <KitchenButtonBackground>
        <ButtonIconRemove />
      </KitchenButtonBackground>
    </ButtonsWrapper>
  );
};
