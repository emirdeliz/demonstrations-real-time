import Image from 'next/image';
import { memo } from 'react';
import * as S from './Banner.style';

export const Banner = memo(() => {
  return (
    <S.Banner>
      <Image
        src="/banner.jpeg"
        alt="Banner manifestações"
        layout="fill"
        objectFit="none"
      />
    </S.Banner>
  );
});
