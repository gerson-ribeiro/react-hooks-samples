import { FC, useEffect, useState } from "react";
import FormComponent from "../../components/FormComponent";
import ListComponent from "../../components/ListComponent";
import useChangeContext from "../../hooks/useChangeContext";
import { Button, Content, Session } from "../../shared/styles/commons";
import { Box } from "./styles";

interface IHomePageProps {}
const HomePage: FC<IHomePageProps> = () => {
  const { handleChange, changeContext } = useChangeContext();
  return (
    <Session>
      <Content>
        <Button onClick={handleChange}>
          {!changeContext ? "Lista" : "Adicionar"}
        </Button>
        <Box>{changeContext ? <ListComponent /> : <FormComponent />}</Box>
      </Content>
    </Session>
  );
};
export default HomePage;
