import React, { useEffect, useMemo, useState } from 'react';
import { Card, Col, Grid, Row, Text } from '@nextui-org/react';
import {
  ProductSize,
  ProductImage,
  ProductImageContainer,
  BuyButton,
  StyledTitle,
  StyledSubtitle,
  StyledPrice,
  StyledOldPrice,
  StyledCard,
  StyledDiscount,
} from './styles';
import { packages } from './content';
import coin from '../../images/coin.png';

const ShopCard = () => {
  const [activePackage, setActivePackage] = useState(packages[0]);

  const price = useMemo(() => {
    return activePackage.credit * 1;
  }, [activePackage]);

  const discount = useMemo(() => {
    return Math.ceil(((price - activePackage.price) / price) * 100);
  }, [price, activePackage]);

  return (
    <StyledCard>
      <Card.Body css={{ px: '$8', position: 'relative', ov: 'visible' }}>
        <Grid.Container>
          <Grid
            sm={4}
            css={{
              d: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ProductImageContainer>
              <ProductImage src={coin} />
            </ProductImageContainer>
          </Grid>
          <Grid
            sm={8}
            css={{
              px: '$10',
              position: 'relative',
              zIndex: '$10',
              mt: '$8',
            }}
          >
            <Col as="nav">
              <StyledTitle>Dedoclaw Credits</StyledTitle>
              <StyledSubtitle>Play the best game ever</StyledSubtitle>
              {/* TODO: Render prices and discount appropriately */}
              <Row css={{ py: '$4' }}>
                <StyledPrice>${activePackage.price}</StyledPrice>
                {price > activePackage.price && (
                  <StyledOldPrice>${price}</StyledOldPrice>
                )}
                {discount > 0 && (
                  <StyledDiscount>{discount}% off</StyledDiscount>
                )}
              </Row>
              <Grid.Container gap={2} css={{ py: '$4' }}>
                {packages.map((s, { id, title }, index) => (
                  <Grid
                    key={`${id}-${index}`}
                    css={{ pl: 0 }}
                    onClick={() => setActivePackage(s)}
                  >
                    <ProductSize
                      selected={id === activePackage.id}
                      transition={{ duration: 0.1 }}
                    >
                      <Text
                        b
                        size={14}
                        css={{ textAlign: 'center', color: 'currentColor' }}
                      >
                        {s.title}
                      </Text>
                    </ProductSize>
                  </Grid>
                ))}
              </Grid.Container>
              <Row css={{ justifyContent: 'right', w: '70%', py: '$4' }}>
                {/* TODO: Add credits to user inventory once user buys a package */}
                <BuyButton auto shadow={'nextui'}>
                  Buy now
                </BuyButton>
              </Row>
            </Col>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </StyledCard>
  );
};

export default ShopCard;
