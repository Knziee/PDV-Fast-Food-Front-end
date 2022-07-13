import {
  CardContainer,
  Description,
  Price,
  PriceButtonBox,
  Title,ImageTitleDescriptionBox
} from "./styles";

interface CartCardProps {
  cardButtons?: any;
  title?: string;
  imgSrc?: any;
  description?: string;
  price?: any;
}

export const CartCard: React.FC<CartCardProps> = ({
  cardButtons,
  title,
  imgSrc,
  description,
  price,
}) => {
  return (
    <CardContainer>
<ImageTitleDescriptionBox>
      <img src={imgSrc} alt="" width={100} />
      <Title>
        {title} <Description>{description}</Description>
      </Title></ImageTitleDescriptionBox>
      <PriceButtonBox>
        <Price> {price}</Price>
        {cardButtons}
      </PriceButtonBox>
    </CardContainer>
  );
};
