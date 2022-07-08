import imagemTest from "../../../assets/images/estacado.png";
import { KitchenButtons } from "./KitchenButton";
import { CardContainer, Description, Title } from "./styles";

interface KitchenCardProps {
  cardImg?: any;
  cardButtons?: any;
  isDone?:string;
}

export const KitchenListCard: React.FC<KitchenCardProps> = ({
  cardImg,
  cardButtons,

}) => {
  return (
    <CardContainer >
      <img src={imagemTest} alt="" width={100} />
      <Title>
        201 - Ricardo <Description>1x smash da casa</Description>
      </Title>

      {cardButtons}
    </CardContainer>
  );
};
