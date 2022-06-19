import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ToastContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  height: 100px;
  width: 300px;
  border-radius: 10px;
  margin: 10px;
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
  padding: 0;
  background: transparent;
  display: flex;
`;

export const CloseImg = styled.img`
  height: 20px;
  width: 20px;
`;
