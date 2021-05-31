import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';

import VisuallyHidden from '../VisuallyHidden';


const STYLES = {
  small:{
    fontSize: 0.875,
    strokeWidth: 0.5,
    iconSize: 16,
    leftPadding: 10,
    blockPadding:6,
  },
  large:{
    fontSize: 1.125,
    strokeWidth: 2,
    iconSize: 24,
    leftPadding: 14,
    blockPadding:9,
  }

}


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
 console.log({
  label,
  icon,
  width,
  size,
  placeholder,
}) 

  const style = STYLES[size];

  return <Wrapper style={{"--width":width + "px"}}>
    <VisuallyHidden>{label}</VisuallyHidden>
        <I size={style.iconSize} id={icon} strokeWidth={style.strokeWidth} style={{"--blockPadding":style.blockPadding +'px'}}/>
        <Input 
          type="text" placeholder={placeholder}  
          style={{
              "--fontSize":style.fontSize + 'rem',
              "--iconSize":style.iconSize + 'px',
              "--leftPadding": style.leftPadding + 'px',
              "--blockPadding":style.blockPadding +'px'
               }}/>
        <Line style={{
          "--strokeWidth":style.strokeWidth + 'px' 
        }}/>
      </Wrapper>;
};

const Line = styled.div`
  position: absolute;
  content: " ";
  display: block;
  border-radius: 1px;
  background-color: black;
  left: 2px;
  right: 2px;
  bottom: 2px;
  height: var(--strokeWidth);

  /* width: 100%; */

`

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};
  /* overflow: hidden; */
  &:hover{
    color: ${COLORS.black}
  }
`

const I = styled(Icon)`
  position: absolute;
  top:var(--blockPadding);
  bottom: 8px;
  left: 2px;
  color: inherit;
  pointer-events: none;
`

const Input = styled.input`
/* position: absolute; */
  padding-top: var(--blockPadding);
  padding-bottom: var(--blockPadding);
  padding-left: calc( var(--iconSize) + var(--leftPadding));
  border: 0px solid transparent;
  /* border-bottom: 2px groove ${COLORS.black}; */
  font-size: var(--fontSize);
  font-weight: 700;
  border-radius: 2px;
  width: 100%;
  color: inherit;

  top: 0;
  bottom: 0;
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
  }

`

export default IconInput;
