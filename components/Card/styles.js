import styled from "styled-components";

export const CategoryCircle = styled.div`
    border: 2px solid ${(props) => props.cor};
    height: 10px;
    width: 10px;
    border-radius: 100%;
`;

export const StyleCard = styled.div`
    padding: 2px 15px;
    border-radius: 30px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0px;

    p{
        font-size: 21px;
    }
`;