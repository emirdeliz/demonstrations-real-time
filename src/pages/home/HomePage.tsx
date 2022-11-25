import { Banner } from '@/components';
import { Flex, Input, Title } from '@/framework';
import { t } from '@/i18n';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Title.Fs6 fw3 center mt5>
        {t('home-page-demonstration-title-main')}
      </Title.Fs6>
      <Flex pl5 pr5>
        <Input
          placeholder={t('home-page-find-city-or-state-input-placeholder')}
        />
      </Flex>
    </>
  );
};
