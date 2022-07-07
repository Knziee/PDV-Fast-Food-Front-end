import { Header } from "../../components/Header";
import { KitchenList } from "../../components/KitchenList";
import { KitchenButtons } from "../../components/KitchenList/KitchenItemCard/KitchenButton";
import { KitchenReadyButton } from "../../components/KitchenList/KitchenItemCard/KitchenReadyButton";
import { CozinhaDivider, CozinhaWrapper } from "./styles";

export const Cozinha: React.FC = () => {
  return (
    <div>
      <Header />
      <CozinhaWrapper>
        <KitchenList title="Preparando:" buttonChoice={<KitchenButtons />} />
        <CozinhaDivider />
        <KitchenList
          title="Pronto:"
          hideNotes="none"
          buttonChoice={<KitchenReadyButton />}
        />
      </CozinhaWrapper>
    </div>
  );
};
