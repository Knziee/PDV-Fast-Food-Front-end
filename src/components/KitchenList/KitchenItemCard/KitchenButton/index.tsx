import {
  ButtonIconConfirm,
  ButtonIconRemove,
  ButtonsWrapper,
  KitchenButtonBackground,
} from "./styles";

export const KitchenButtons: React.FC = () => {
  return (
    <ButtonsWrapper>
      <KitchenButtonBackground>
        <ButtonIconRemove />
      </KitchenButtonBackground>
      <KitchenButtonBackground sucess>
        <ButtonIconConfirm />
      </KitchenButtonBackground>
    </ButtonsWrapper>
  );
};
