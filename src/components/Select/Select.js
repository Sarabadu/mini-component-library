import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
  <Wrapper>
    <TheSelect value={value} onChange={onChange} style={{"--width": displayedValue.length + "ch"}}>
      {children}
    </TheSelect>
    <MySelect>
      {displayedValue}
      <I id='chevron-down' size={24} strokeWidth={2}></I>
    </MySelect>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* width: calc(var(--width) + 68px); */
  width: max-content;
  border-radius: 8px;
  /* overflow: hidden; */
`

const TheSelect = styled.select`
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  /* padding-right: 52px; */
`

const MySelect = styled.div`
/* position: absolute; */
  padding: 12px 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding-right: 52px;

  ${TheSelect}:hover + &{
    color: ${COLORS.black};
  }
  ${TheSelect}:focus + & {
    outline: 1px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }
`


const I = styled(Icon)`
  position:absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin:auto;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  /* color: inherit; */
  pointer-events: none;
`



export default Select;
