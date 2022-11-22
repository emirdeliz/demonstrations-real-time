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
      <Flex mt5 mb5>
        <Input placeholder={t('home-page-find-city-input-placeholder')} />
      </Flex>
    </>
  );
};
