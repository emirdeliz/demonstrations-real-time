import { memo } from 'react';
import { Flex, Icon, Link } from '@atoms';
import * as S from './Banner.style';
import { t } from '@i18n';

export const Banner = memo(() => {
  return (
    <S.Banner>
      <S.Top>
        <Flex.Row alignCenter justifySpaceAround wFull hFull pl2 pr2>
          <Link>
            <Icon.Menu orange sm />
          </Link>

          <Link>
            <Icon.User orange sm /> {t('enter')}
          </Link>
        </Flex.Row>
      </S.Top>
    </S.Banner>
  );
});
