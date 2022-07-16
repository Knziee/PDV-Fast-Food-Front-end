import {
  ButtonIconConfirm,
  KitchenButtonBackground,
} from "./styles";

interface ButtonsProps {
  actionConfirm?: any;
  actionRemove?: any;
}

export const KitchenButtonConfirm: React.FC<ButtonsProps> = ({
  actionConfirm,
  actionRemove,
}) => {
  return (

      <div
        onClick={() => {
          actionRemove();
        }}
      >
        <KitchenButtonBackground sucess>
          <ButtonIconConfirm />
        </KitchenButtonBackground>
      </div>

  );
};
