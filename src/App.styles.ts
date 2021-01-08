import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/tyler-devine.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: url(${BGImage}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family:  'Open Sans';
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: white;
    }
    .score {
        color: white;
        font-size: 2rem;
        margin: 0;
    }
    h1 {
        font-family: 'Open Sans';
        color: #fff;
        background-size: 100%;
        background-clip: text;

        filter: drop-shadow(2px 2px #b351ff);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
    .start,
    .next {
        display: inline-block;
        border-radius: 3px;
        padding: 0.5rem 0;
        margin: 0.5rem 1rem 3rem 1rem;
        width: 11rem;
        background: transparent;
        color: white;
        border: 2px solid white;
        cursor: pointer;
        -webkit-transition: all 0.2s 0s ease-in-out;
        -moz-transition: all 0.2s 0s ease-in-out;
        -o-transition: all 0.2s 0s ease-in-out;
        transition: all 0.2s 0s ease-in-out;
    }
    .start:hover,
    .next:hover {
        background-color: rgba(217, 168, 255, 0.1);
        -webkit-transition: all 0.3s 0s ease-in-out;
        -moz-transition: all 0.3s 0s ease-in-out;
        -o-transition: all 0.3s 0s ease-in-out;
        transition: all 0.3s 0s ease-in-out;
    }
`;
