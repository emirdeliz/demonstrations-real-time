import { Flex } from '@/framework';
import * as S from './Card.style';

export const Card = () => {
  return (
    <S.Card>
      <Flex.Col>
        <S.Video />
        <S.CardTitle></S.CardTitle>
      </Flex.Col>
    </S.Card>
  );
};
