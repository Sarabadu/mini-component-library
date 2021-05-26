/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Container size={size} >
    <ProgressContainer>
      <Progress value={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></Progress>
    </ProgressContainer>
  </Container>;
};


const SIZES = {
  small:'8px',
  medium:'12px',
  large: '24px'
};

const Container = styled.div`
  height: ${(props=> SIZES[props.size])};
  border-radius: 8px;
  ${props => props.size === "large" ? "padding: 4px;" : null}
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const ProgressContainer = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.div`
  height: 100%;
  width: ${props=>`${props.value}%`};
  background-color: ${COLORS.primary};
`
export default ProgressBar;
