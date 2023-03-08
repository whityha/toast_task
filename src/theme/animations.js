import { keyframes } from 'styled-components';

export const opacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const opacityClose = keyframes`
  100% {
    opacity: 0;
  }

  0% {
    opacity: 1;
  }
`;

export const bubble = keyframes`
  0% {
    transform-origin: center center;
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const bubbleClose = keyframes`
  0% {
    transform-origin: center center;
    transform: scale(1);
  }
  25% {
    transform: scale(.9);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
`;

export const slideCloseRight = keyframes`
  0% {
    transform: translateX(0%)
  }

  25% {
    transform: translateX(-10%);
  }

  100% {
    transform: translateX(150%)
  }
`;

export const slideOpenRight = keyframes`
  0% {
    transform: translateX(150%)
  }

  75% {
    transform: translateX(-10%)
  }

  100% {
    transform: translateX(0%)
  }
`;

export const slideCloseLeft = keyframes`
  0% {
    transform: translateX(0%)
  }

  25% {
    transform: translateX(10%);
  }

  100% {
    transform: translateX(-150%)
  }
`;

export const slideOpenLeft = keyframes`
  0% {
    transform: translateX(-150%)
  }

  75% {
    transform: translateX(10%);
  }

  100% {
    transform: translateX(0%)
  }
`;
