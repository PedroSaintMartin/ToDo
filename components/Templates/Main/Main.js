import React from "react";
import { IndexBody } from "./styles";
import { Card } from "../../Card";
import { ListCard } from "../../ListCard/ListCard";

const MockupList = [{task: "fazer café", color: '#000'}, {task: "fazer Miojo", color: '#000'}, {task: "fazer Arroz", color: '#000'},]

export const Main = () => {
  return (
    <IndexBody>
      <h1>Minhas Atividades</h1>
      <ListCard tasks={MockupList}/>
      <h2>Categorias</h2>
    </IndexBody>
  );
};
