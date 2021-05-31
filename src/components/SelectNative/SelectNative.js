import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectNative = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
  <Wrapper>
    <TheSelect value={value} onChange={onChange} style={{
      "--width": displayedValue.length + "ch",
      "--space-width": (displayedValue.length - 2) + "px"
      }}>
      {children}
    </TheSelect>
    {/* <MySelect>
      {displayedValue}
    </MySelect> */}
    <I id='chevron-down' size={24} strokeWidth={2}></I>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* width: calc(var(--width) + 68px); */
  width: max-content;
  border-radius: 8px;
  color: ${COLORS.gray700};
  /* overflow: hidden; */
`

const TheSelect = styled.select`
  appearance: none;
  padding: 12px 16px;
  padding-right: 52px;
  border:none;
  border-radius: 8px;
  /* position: absolute; */
  /* top:0; */
  /* left: 0; */
   /* height: 100%; */
    width: calc(var(--width) + var(--space-width) + 68px); 
  /* opacity: 0; */
  /* padding-right: 52px; */
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  &:hover {
    color: ${COLORS.  black};
  }
`

const MySelect = styled.div`
/* position: absolute; */
`


const I = styled(Icon)`
  position:absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin:auto;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  color: inherit;
  pointer-events: none;
 ${TheSelect}:hover + &  {
  color: ${COLORS.black};
} 
`



export default SelectNative;
