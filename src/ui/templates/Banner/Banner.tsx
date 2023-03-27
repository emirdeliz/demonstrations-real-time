import { Flex } from '@atoms';
import { memo } from 'react';
import * as S from './Banner.style';

export const Banner = memo(() => {
  return (
    <Flex.Center wFull>
      <S.Img src="/banner.jpeg" alt="Banner manifestações" />
    </Flex.Center>
  );
});
