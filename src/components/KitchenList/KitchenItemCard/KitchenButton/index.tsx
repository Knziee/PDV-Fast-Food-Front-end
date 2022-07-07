import {
  ButtonIconConfirm,
  ButtonIconRemove,
  ButtonsWrapper,
  KitchenButtonBackground,
} from "./styles";

interface KitchenButtonProps {
  background?: string;
}

export const KitchenButtons: React.FC<KitchenButtonProps> = ({
  background,
}) => {
  return (
    <ButtonsWrapper>
      <KitchenButtonBackground sucess>
        <ButtonIconConfirm />
      </KitchenButtonBackground>
      <KitchenButtonBackground>
        <ButtonIconRemove />
      </KitchenButtonBackground>
    </ButtonsWrapper>
  );
};
