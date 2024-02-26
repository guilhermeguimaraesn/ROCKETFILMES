import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Container = styled(Link)`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  padding: 32px;
  border-radius: 10px;

  >svg {
    color: ${({theme}) => theme.COLORS.PINK};
    padding-top: 8px;
  }

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 24px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 16px 0;

  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
