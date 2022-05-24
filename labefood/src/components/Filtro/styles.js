import styled from 'styled-components'

export const FiltroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 42px;
    margin: 8px 0 0;

    overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

    ul{
        margin-right: 10px;

        li{
            list-style: none;
            height: 16px;
            left: 20px;
            font-family: var(--font-roboto);
            font-size: var(--font-size);
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 18px;
            letter-spacing: -0.39px;
            text-align: center;
        }
    }

   li:hover{
       color: var(--blue);
       cursor: pointer;
   }

`; 