import {
  ItemBackground,
  ItemDescription,
  ItemImgBackground,
  ItemPrice,
  ItemTitle,
} from "./styles";

interface ItemProps {
  imgSrc?: any;
  title?: string;
  description?: string;
  price?: string;
  imgBackground?: string;
}
export const ItemCard: React.FC<ItemProps> = ({
  title,
  imgSrc,
  description,
  price,
  imgBackground,
}) => {
  return (
    <ItemImgBackground red>
      <ItemBackground>
        <img
          src={imgSrc}
          alt=""
          style={{
            maxHeight: "180px",
            maxWidth: "220px",
            marginTop: "-140px",
          }}
        />
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>{price}</ItemPrice>
      </ItemBackground>
    </ItemImgBackground>
  );
};
