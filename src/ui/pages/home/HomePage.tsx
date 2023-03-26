import { Banner, Card } from '@components';
import { Col, Flex, Input, Row, Title } from '@atoms';
import { t } from '@i18n';

export const HomePage = () => {
  return (
    <Flex.Col wFull hFull alignSpaceAround>
      <Banner />
      <Title semibold center mt5 mb5 fs6 lh5>
        {t('home-page-demonstration-title-main')}
      </Title>
      <Row>
        <Col.C12>
          <Input
            ml3
            mr3
            mb3
            placeholder={t('home-page-find-city-or-state-input-placeholder')}
          />
        </Col.C12>
      </Row>
      <Row>
        <Col.C3>
          <Card />
        </Col.C3>
        <Col.C3>
          <Card />
        </Col.C3>
      </Row>
    </Flex.Col>
  );
};
