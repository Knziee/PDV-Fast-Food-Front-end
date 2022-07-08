import {
  KitchenListContainer,
  Notes,
  NotesContainer,
  OnGoingList,
  Title,
} from "./styles";

import { KitchenListCard } from "./KitchenItemCard";
import {KitchenButtons} from "./KitchenItemCard/KitchenButton"

interface KitchenListProps {
  title?: string;
  cardDone?: string;
  buttonChoice?: any;
  hideNotes?: string;
}

export const KitchenList: React.FC<KitchenListProps> = ({
  title,
  cardDone,
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
