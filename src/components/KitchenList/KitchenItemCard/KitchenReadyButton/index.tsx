import {
  ButtonIconRemove,
  ButtonsWrapper,
  KitchenButtonBackground,
} from "./styles";

export const KitchenReadyButton: React.FC = () => {
  return (
    <ButtonsWrapper>
      <KitchenButtonBackground>
        <ButtonIconRemove />
      </KitchenButtonBackground>
    </ButtonsWrapper>
  );
};
