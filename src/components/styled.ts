import { bottomLeft, bottomRight, topLeft, topRight } from "@styled/position";
import { getToastAnimation } from "@helpers/getToastAnimation";
import styled from "styled-components";
import { ToastPosition } from "types/enums/toastPosition";
import { ToastAnimation } from "types/enums/toastAnimation";

export const Wrapper = styled.div<{ position: ToastPosition }>`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  ${(props) => {
    switch (props.position) {
      case ToastPosition.BottomLeft:
        return bottomLeft;
      case ToastPosition.TopLeft:
        return topLeft;
      case ToastPosition.TopRight:
        return topRight;
      default:
        return bottomRight;
    }
  }}
`;

interface ToastContainerProps {
  color: string;
  margin: number;
  position: ToastPosition;
  animation: ToastAnimation;
  isDelete: boolean;
}

export const ToastContainer = styled.div<ToastContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  height: 100px;
  width: 300px;
  border-radius: 10px;
  margin: ${(props) => props.margin}px;
  transition: all 0.3s;
  box-shadow: 0 0 10px #999;
  opacity: 0.9;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }

  ${({ position, animation, isDelete }) => {
    const animations = getToastAnimation(position, animation);
    if (animations) {
      const { onAdd, onDelete } = animations;
      return isDelete ? onDelete : onAdd;
    }

    return null;
  }}
`;

export const Icon = styled.img`
  margin: 20px;
  height: 30px;
  width: 30px;
`;

export const Text = styled.span<{ font: string; color: string }>`
  flex: 1;
  color: ${(props) => props.color};
  font-family: ${(props) => props.font}, Courier, monospace;
`;

export const ButtonWrapper = styled.div`
  width: 10%;
  align-self: flex-start;
  padding-top: 10px;
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  border: 2px solid transparent;
  border-radius: 2px;
  padding: 0;
  cursor: pointer;
  background: transparent;
  display: flex;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const CloseImg = styled.img`
  height: 20px;
  width: 20px;
`;
