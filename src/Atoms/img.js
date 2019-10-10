import React from "react";
import styled from "styled-components";

const OuterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgCard = styled.div`
  width: 80%;
  padding: 3%;
  margin: 3%;
  border: 1px solid black;
  border-radius: 40px;
  background: black;
  color: white;
  line-height: 2.5em;
`;

export const ImgOne = ({ title, path, detail, date, para }) => {
  return (
    <OuterCard>
      <ImgCard>
        <h3>{title}</h3>
        <img className="img" src={path} alt={detail} />
        <p>Date: {date}</p>
        <p>{para}</p>
      </ImgCard>
    </OuterCard>
  );
};
