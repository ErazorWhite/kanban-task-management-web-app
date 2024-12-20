import { styled } from 'styled-components';

interface IBackdropContainerProps {
  isMobile?: boolean;
}

export const BackdropContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<IBackdropContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1500;
`;
