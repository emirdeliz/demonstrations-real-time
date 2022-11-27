import styled from 'styled-components';

const CARD_WIDTH = '550px';
const CARD_HEIGHT = '550px';

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radius.Rd2};
  box-shadow: 2px 2px 5px 0px ${({ theme }) => theme.color.P2};
  transition: all 0.3s ease-out;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardTitle = styled.div``;

export const Video = styled.video``;
