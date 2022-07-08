import { KitchenListCard } from "./KitchenItemCard";
import {
  KitchenListContainer,
  Notes,
  NotesContainer,
  OnGoingList,
  Title,
} from "./styles";

interface KitchenListProps {
  title?: string;
  buttonChoice?: any;
  hideNotes?: string;
}

export const KitchenList: React.FC<KitchenListProps> = ({
  title,
  buttonChoice,
  hideNotes,
}) => {
  return (
    <KitchenListContainer>
      <Title>{title}</Title>
      <OnGoingList>
        <KitchenListCard cardButtons={buttonChoice} />
        <Notes display={hideNotes}>Observações:</Notes>
        <NotesContainer display={hideNotes}></NotesContainer>
      </OnGoingList>
    </KitchenListContainer>
  );
};
