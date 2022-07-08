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
      <KitchenButtonBackground>
        <ButtonIconRemove />
      </KitchenButtonBackground>{" "}
      <KitchenButtonBackground sucess>
        <ButtonIconConfirm />
      </KitchenButtonBackground>
    </ButtonsWrapper>
  );
};
