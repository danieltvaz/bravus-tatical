import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px 0px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  border-radius: 12px;
`;
