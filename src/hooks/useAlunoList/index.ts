import { useState } from "react";
import IAluno from "../../shared/models/aluno";

const useAlunoList = () => {
  const [alunoList, setAlunoList] = useState<IAluno[]>([]);

  const [obj, setObj] = useState<IAluno>({
    name: "",
    materia: "",
    nota: 0,
  });

  const handleOnChange = (e: any, type: any) => {
    let new_oj = { ...obj };

    if (type === "Name") new_oj.name = e.target.value;
    if (type === "Materia") new_oj.materia = e.target.value;
    if (type === "Nota") new_oj.nota = e.target.value;

    setObj(new_oj);
  };

  const handleOnClick = () => {
    let new_arr = [...alunoList, obj];

    setAlunoList(new_arr);
  };

  return { alunoList, handleOnChange, handleOnClick };
};

export default useAlunoList;
