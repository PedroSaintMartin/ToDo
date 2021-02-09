import React from "react";
import { StyleCard, CategoryCircle } from "./styles";

export const Card = ({descricao, cor, corFundo}) => {
  return <StyleCard corFundo={corFundo}>
            <p>{descricao}</p>
            <CategoryCircle cor={cor}/>
        </StyleCard>;
};
