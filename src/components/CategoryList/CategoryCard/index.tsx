import { CategoryBackground, CategoryTitle } from "./styles";

interface CategoryProps {
  imgSrc?: any;
  title: string;
  action?: any;
}
export const CategoryCard: React.FC<CategoryProps> = ({ title, imgSrc,action }) => {
  return (
    <CategoryBackground onClick={action}>
      <img
        src={imgSrc}
        alt=""
        style={{ maxHeight: "90px", maxWidth: "130px" }}
      />
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryBackground>
  );
};
