import {
  ItemBackground,
  ItemDescription,
  ItemImgBackground,
  ItemPrice,
  ItemSelected,
  ItemTitle,
} from "./styles";

interface ItemProps {
  imgSrc?: any;
  title?: string;
  description?: string;
  price?: string;
  selected?: string;
}

export const ItemCard: React.FC<ItemProps> = ({
  title,
  imgSrc,
  description,
  price,
  selected,
}) => {
  return (
    <ItemImgBackground red>
      <ItemSelected visible={selected} />
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
