import imagemTest from "../../../assets/images/estacado.png";
import { CardContainer, Description, Title } from "./styles";

interface KitchenCardProps {
  cardButtons?: any;
}

export const KitchenListCard: React.FC<KitchenCardProps> = ({
  cardButtons,
}) => {
  return (
    <CardContainer>
      <img src={imagemTest} alt="" width={100} />
      <Title>
        201 - Ricardo <Description>1x smash da casa</Description>
      </Title>
      {cardButtons}
    </CardContainer>
  );
};
