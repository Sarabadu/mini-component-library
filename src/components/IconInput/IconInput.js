import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';

import VisuallyHidden from '../VisuallyHidden';


const STYLES = {
  small:{
    fontSize: 14,
    height: 24,
    strokeWidth: 1,
    iconSize: 16,
  },
  large:{
    fontSize: 18,
    height: 36,
    strokeWidth: 2,
    iconSize: 24,
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

  return <Wrapper >
    <VisuallyHidden>{label}</VisuallyHidden>
        <I size={style.iconSize} id={icon} strokeWidth={style.strokeWidth} style={{"--blockPadding":style.blockPadding +'px'}}/>
        <Input 
          type="text" placeholder={placeholder}  
          style={{
              "--fontSize": (style.fontSize / 16) + 'rem',
              "--height":style.height +'px',
              "--strokeWidth":style.strokeWidth +'px',
              "--width":width + "px"
               }}/>
      </Wrapper>;
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  overflow: hidden;
  &:hover{
    color: ${COLORS.black}
  }
`

const I = styled(Icon)`
  position: absolute;
  top:0;
  bottom: 0px;
  left: 2px;
  height: ${props => props.size + 'px'};
  margin: auto 0;
  color: inherit;
  pointer-events: none;
`

const Input = styled.input`
  padding-left: var(--height);
  border: 0px solid transparent;
  height: var(--height);
  border-bottom: var(--strokeWidth) solid ${COLORS.black}; 
  font-size: var(--fontSize)  ;
  font-weight: 700;
  width: var(--width);
  color: inherit;
  outline-offset: 2px;

  top: 0;
  bottom: 0;
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
  }

`

export default IconInput;
