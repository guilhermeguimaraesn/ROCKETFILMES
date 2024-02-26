import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
        grid-area: header;
        height: 105px;
        width: 100%;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        display: flex;
        justify-content: space-between;

        padding: 0 80px;
`;

export const Profile = styled(Link)`
        display: flex;
        align-items: center;
        text-align: right;

        >img{
            width: 56px;
            height: 56px;
            border-radius: 50%;
            margin-left: 8px;
        }

        >div{
            display: flex;
            flex-direction: column;
            margin-left: 16px;
            line-height: 24px;

            span { 
                font-size: 14px;
                color: ${({theme}) => theme.COLORS.GRAY_100};
            }
            strong{
                white-space: nowrap;
                font-size: 18px;
                color: ${({ theme }) => theme.COLORS.WHITE}
            }
        }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    width: 100%;
    margin: 0 64px;
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }


`;



