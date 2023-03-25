import { Card } from '@components';
import { Col, Flex, Input, Row, Title } from '@atoms';
import { t } from '@i18n';

export const HomePage = () => {
  return (
    <Flex.Col w-full h-full>
      <Title semibold center mt2 mb5>
        {t('home-page-demonstration-title-main')}
      </Title>
      <Flex pl3 pr3 wFull>
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
