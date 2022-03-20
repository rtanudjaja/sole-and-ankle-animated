import React from 'react'
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

export const HeaderNavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <BoldLink>{children}</BoldLink>
      <NormalLink>{children}</NormalLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  /* Text slides up effect */
  overflow: hidden;
`

const NormalLink = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-weight: ${WEIGHTS.medium};
  transition: transform 500ms;
  transform: translateY(0);

  ${Wrapper}:hover & {
    transform: translateY(-100%);
  }
`

const BoldLink = styled(NormalLink)`
  font-weight: bold;
  position: absolute;
  top: 100%;
  left: 0;
`