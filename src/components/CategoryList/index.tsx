import { CategoryCard } from "./CategoryCard";
import { CategoryContainer, SubTitle, Title } from "./styles";

export const CategoryList: React.FC = () => {
  const categoryList = [
    { categoryImg: "https://i.imgur.com/5Wg6xa1.png", categoryTitle: "Combos" },
    {
      categoryImg: "https://i.imgur.com/UgRVlp9.png",
      categoryTitle: "Acompanhamentos",
    },
    {
      categoryImg: "https://i.imgur.com/itpLGEW.png",
      categoryTitle: "Bebidas",
    },
    {
      categoryImg: "https://i.imgur.com/6RR3CVS.png",
      categoryTitle: "Sobremesas",
    },
  ];
  return (
    <div>
      <Title>Categorias</Title>
      <SubTitle>Navegue por Categoria</SubTitle>
      <CategoryContainer>
        {categoryList.map((categoryList, index) => {
          return (
            <CategoryCard
              title={categoryList.categoryTitle}
              imgSrc={categoryList.categoryImg}
              key={index}
            />
          );
        })}
      </CategoryContainer>
    </div>
  );
};
