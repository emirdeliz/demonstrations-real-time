import { Banner, Card } from '@/components';
import { Col, Flex, Input, Title } from '@/framework';
import { t } from '@/i18n';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Title.Fs6 fw3 center mt2 mb5>
        {t('home-page-demonstration-title-main')}
      </Title.Fs6>
      <Flex pl3 pr3 wFull>
        <Input
          placeholder={t('home-page-find-city-or-state-input-placeholder')}
        />
        <Flex.Row mt2 wFull>
          <Col.C3>
            <Card />
          </Col.C3>
          <Col.C3>
            <Card />
          </Col.C3>
        </Flex.Row>
      </Flex>
    </>
  );
};
