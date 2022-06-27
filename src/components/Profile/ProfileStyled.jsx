import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: auto;
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const ProfileCard = styled.div`
  text-align: center;
  padding: 30px 0;
  background-color: ${props => props.theme.colors.white};
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.greyBg};
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const TagText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const LocationText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.greyOpacity};
  border-top: 1px solid rgba(47, 48, 58, 0.1);
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
`;

export const StatisticItems = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 3);
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid rgba(47, 48, 58, 0.1);
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: ${props => props.theme.colors.grey};
`;

export const Quantity = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 2;
`;
