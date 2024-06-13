import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.boxColor};
  padding: 20px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 15px;
    font-weight: 400;
    color: ${(props) => props.theme.accentColor};
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

interface ILocation {
  state: {
    priceHistory: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

export default function Price() {
  const { state } = useLocation() as ILocation;
  return (
    <>
      <Overview>
        <OverviewItem>
          <span>price:</span>
          <span>{state.priceHistory.price}</span>
        </OverviewItem>
        <OverviewItem>
          <span>ath_date</span>
          <span>{state.priceHistory.ath_date}</span>
        </OverviewItem>
        <OverviewItem>
          <span>ath_price</span>
          <span>{state.priceHistory.ath_price}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>percent_change_1h</span>
          <span>{state.priceHistory.percent_change_1h}</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent_change_6h</span>
          <span>{state.priceHistory.percent_change_6h}</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent_change_12h</span>
          <span>{state.priceHistory.percent_change_12h}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>percent_change_24h</span>
          <span>{state.priceHistory.percent_change_24h}</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent_change_7d</span>
          <span>{state.priceHistory.percent_change_7d}</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent_change_30d</span>
          <span>{state.priceHistory.percent_change_30d}</span>
        </OverviewItem>
      </Overview>
    </>
  );
}
