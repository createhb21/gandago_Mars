import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DragabbleCard from '../DragabbleCard';

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  min-height: 200px;
`;

export type ToDoBoardProps = {
  toDos: string[];
  boardId: string;
};

function ToDoBoard({ toDos, boardId }: ToDoBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} toDo={toDo} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default ToDoBoard;
