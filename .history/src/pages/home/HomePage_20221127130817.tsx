import { Banner, Card } from '@/components';
import { Col, Flex, Input, Row, Title } from '@/framework';
import { t } from '@/i18n';

export const HomePage = () => {
  return (
    <Flex.Col w-full h-full>
      <Banner />
      <Title.Fs6 fw-3 center mt-2 mb-5>
        {t('home-page-demonstration-title-main')}
      </Title.Fs6>
      <Flex pl-3 pr-3 w-full>
        <Input
          placeholder={t('home-page-find-city-or-state-input-placeholder')}
        />
        <Row mt-4>
          <Col.C3>
            <Card />
          </Col.C3>
          <Col.C3>
            <Card />
          </Col.C3>
        </Row>
      </Flex>
    </Flex.Col>
  );
};
