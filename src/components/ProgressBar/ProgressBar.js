/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";


const SIZES = {
  small: {
    height: "8",
    radius: 4,
    padding: 0,
  },
  medium: {
    height: "12",
    radius: 4,
    padding: 0,
  },
  large: {
    height: "24",
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size];

  if (!styles){
    throw new Error(`Unknown size value passed to ProgressBar componente: ${size}`)
  }

  return (
    <Container size={size}  style={{
      "--height": styles.height + "px",
      "--radius": styles.radius + "px",
      "--padding": styles.padding + "px"
    }}>
      <ProgressContainer>
        <Progress
          value={value}
          style={{
            "--width": value+"%",
          }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></Progress>
      </ProgressContainer>
    </Container>
  );
};



const Container = styled.div`
  height: var(--height);
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;
const ProgressContainer = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: var(--width);
  background-color: ${COLORS.primary};
`;
export default ProgressBar;
