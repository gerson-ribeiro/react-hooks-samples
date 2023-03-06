import { FC } from "react";
import useAlunoList from "../../hooks/useAlunoList";
import useChangeContext from "../../hooks/useChangeContext";
import { Button, Input, Session } from "../../shared/styles/commons";

interface IFormComponent {
  styles?: any;
}
const FormComponent: FC<IFormComponent> = ({ ...props }) => {
  const { handleOnChange, handleOnClick } = useAlunoList();
  const { changeContext, handleChange } = useChangeContext();

  const clickBtnFn = () => {
    handleOnClick();
    handleChange();
  };

  return (
    <Session {...props}>
      <Input
        type="text"
        onChange={(e) => handleOnChange(e, "Name")}
        placeholder="Name"
      />
      <Input
        type="text"
        onChange={(e) => handleOnChange(e, "Materia")}
        placeholder="Materia"
      />
      <Input
        type="number"
        onChange={(e) => handleOnChange(e, "Nota")}
        placeholder="Nota"
      />
      <Button onClick={clickBtnFn}>Adicionar</Button>
    </Session>
  );
};

export default FormComponent;
