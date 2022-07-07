import { CategoryBackground, CategoryTitle } from "./styles";

interface CategoryProps {
  imgSrc?: any;
  title: string;
}
export const CategoryCard: React.FC<CategoryProps> = ({ title, imgSrc }) => {
  return (
    <CategoryBackground>
      <img
        src={imgSrc}
        alt=""
        style={{ maxHeight: "90px", maxWidth: "130px" }}
      />
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryBackground>
  );
};
