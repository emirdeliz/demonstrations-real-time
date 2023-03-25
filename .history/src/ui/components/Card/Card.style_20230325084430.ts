import styled from 'styled-components';

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radius.Rd2};
  box-shadow: 2px 2px 5px 0px ${({ theme }) => theme.colors.P2};
  transition: all 0.3s ease-out;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardTitle = styled.div``;

export const Video = styled.video``;
