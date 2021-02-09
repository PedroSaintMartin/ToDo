import React from "react";
import { Card } from "../Card";
import { StyleListCard } from "./styles";

export const ListCard = (props) => {
  return <StyleListCard>
            {props.tasks.map((task) => (<Card descricao={task.task} cor={task.color}/>))}
        </StyleListCard>;
};
