import { ToastPosition } from "types/enums/toastPosition";
import { ToastAnimation } from "types/enums/toastAnimation";
import { FlattenSimpleInterpolation } from "styled-components";
import {
  leftMovementAdd,
  leftMovementDelete,
  rightMovementAdd,
  rightMovementDelete,
  appearanceAdd,
  appearanceDelete,
} from "@constants/styled/animation";

export type getToastAnimationType = (
  position: ToastPosition,
  animation: ToastAnimation
) => {
  onAdd: FlattenSimpleInterpolation;
  onDelete: FlattenSimpleInterpolation;
} | null;

export const getToastAnimation: getToastAnimationType = (
  position,
  animation
) => {
  switch (animation) {
    case ToastAnimation.Movement: {
      switch (position) {
        case ToastPosition.BottomLeft:
        case ToastPosition.TopLeft:
          return {
            onAdd: leftMovementAdd,
            onDelete: leftMovementDelete,
          };
        default:
          return {
            onAdd: rightMovementAdd,
            onDelete: rightMovementDelete,
          };
      }
    }
    case ToastAnimation.Appearance: {
      return {
        onAdd: appearanceAdd,
        onDelete: appearanceDelete,
      };
    }
    default:
      return null;
  }
};
