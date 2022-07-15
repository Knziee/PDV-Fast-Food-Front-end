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
  // const [isSelected, SetIsSelected] = useState("nop");
  // function selectItem() {
  //   SetIsSelected("yes");
  // }

  return (
    <div>
      <ItemImgBackground red>
        <ItemSelected visible="nop" />
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
    </div>
  );
};
