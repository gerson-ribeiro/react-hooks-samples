import { FC } from "react";
import useAlunoList from "../../hooks/useAlunoList";
import {
  Body,
  BodyCell,
  BodyRow,
  Header,
  HeaderCell,
  HeaderRow,
  TableContainer,
} from "../../shared/styles";
import { Session } from "../../shared/styles/commons";

interface IListComponent {
  styles?: any;
}

const ListComponent: FC<IListComponent> = ({ ...props }) => {
  const { alunoList } = useAlunoList();

  return (
    <Session {...props}>
      <TableContainer>
        <Header>
          <HeaderRow>
            <HeaderCell>Nome</HeaderCell>
            <HeaderCell>Materia</HeaderCell>
            <HeaderCell>Nota</HeaderCell>
          </HeaderRow>
        </Header>
        <Body>
          {alunoList.map(({ name, materia, nota }) => (
            <BodyRow>
              <BodyCell>{name}</BodyCell>
              <BodyCell>{materia}</BodyCell>
              <BodyCell>{nota}</BodyCell>
            </BodyRow>
          ))}
          {alunoList.length <= 0 && (
            <BodyRow>
              <BodyCell colSpan={3}>Nada a exibir</BodyCell>
            </BodyRow>
          )}
        </Body>
      </TableContainer>
    </Session>
  );
};
export default ListComponent;
