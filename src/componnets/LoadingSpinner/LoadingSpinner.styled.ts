import { styled } from 'styled-components';
import { MutatingDots } from 'react-loader-spinner';

export const CenteredMutatingDots = styled(MutatingDots)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5550;
`;
