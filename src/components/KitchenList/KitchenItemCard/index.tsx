import { CardContainer, Description, Title } from "./styles";

interface KitchenCardProps {
  cardButtons?: any;
  image?: any;
  title?: string;
  name?: any;
  orderNumber?: string;
}

export const KitchenListCard: React.FC<KitchenCardProps> = ({
  cardButtons,
  image,
  title,
  name,
  orderNumber,
}) => {
  return (
    <CardContainer>
      <img src={image} alt="" width={100} />
      <Title>
        {orderNumber} - {name} <Description>{title}</Description>
      </Title>
      {cardButtons}
    </CardContainer>
  );
};
