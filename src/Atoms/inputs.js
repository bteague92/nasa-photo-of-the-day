import React from "react";
import styled from "styled-components";

const SelectStyle = styled.select`
  height: 30px;
  width: 100px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const DateBar = props => {
  return (
    <div>
      <SelectStyle>
        <option value="2019-10-09">2019-10-09</option>
        <option value="2019-10-08">2019-10-08</option>
        <option value="2019-10-07">2019-10-07</option>
        <option value="2019-10-06">2019-10-06</option>
        <option value="2019-10-05">2019-10-05</option>
        <option value="2019-10-04">2019-10-04</option>
        <option value="2019-10-03">2019-10-03</option>
        <option value="2019-10-02">2019-10-02</option>
      </SelectStyle>
    </div>
  );
};
