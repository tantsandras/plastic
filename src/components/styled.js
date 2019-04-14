import React from "react"
import styled, { keyframes } from "styled-components"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  
  const growLeft = keyframes`
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  `;

  const Slogan = styled.h4`
    margin: 2em;
    font-size: 4em;
    font-family: 'Abril Fatface';
    color: rgb(77, 87, 127);
    animation: ${fadeInRight} ease 0.8s forwards;
  `;

  const HomeButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10em;
  font-family: sans-serif;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  & ${HomeButtons}:nth-child(1) {
    text-transform: uppercase;
    display: inline-block
    margin-left: 20%;
    margin-right: 1em;
    font-weight: bold;
    font-size: 1.6rem;
    background: none;
    color: rgb(77, 87, 127);
    border: none;
    padding: 0.5rem;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    line-height: 1;
  }

  & ${HomeButtons}:nth-child(1):hover {
    color: rgb(211, 101, 67);
  }
    
  & ${HomeButtons}:nth-child(2) {
    width: 14%;
    margin: 1.8em 1em 1em 1em;
    height: 0.1em;
    background-color: rgb(77, 87, 127);
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;
    animation-delay: 0.8s;
  }

  & ${HomeButtons}:nth-child(3) {
    font-size: 1.4rem;
    color: rgb(77, 87, 127);
    border: none;
    background: none;
    margin-left: -1.6em;
    padding: 0.5rem;
    opacity: 0;
    animation: ${fadeInRight} ease 1.2s forwards;
    animation-delay: 1.6s;
  }

  & ${HomeButtons}:nth-child(3):hover {
    color: rgb(211, 101, 67);
  }
`;

export {
HomeButtons,
Slogan,
}