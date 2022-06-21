import { css } from "styled-components";

export const rightMovementAdd = css`
  animation: toast-in-right-add 0.7s;
  @keyframes toast-in-right-add {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const rightMovementDelete = css`
  animation: toast-in-right-delete 0.7s;
  @keyframes toast-in-right-delete {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

export const leftMovementAdd = css`
  animation: toast-in-left-add 0.7s;
  @keyframes toast-in-left-add {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const leftMovementDelete = css`
  animation: toast-in-left-delete 0.7s;
  @keyframes toast-in-left-delete {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const appearanceAdd = css`
  animation: toast-appearance-add 0.7s;
  @keyframes toast-appearance-add {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
`;

export const appearanceDelete = css`
  animation: toast-appearance-delete 0.7s;
  @keyframes toast-appearance-delete {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
`;
