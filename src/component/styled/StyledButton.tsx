import React from 'react';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';

const redarr = ['#ED3124', '#C92B20', '#AB231A'];
const bluearr = ['#007FFF', '#0072E5', '#0059B2',];
const greenarr = ['#1BD127', '#17B021', '#14991D'];
const blackarr = ['#171717', '#282828', '#3D3D3D'];


const defaultstyle = `
    border-radius: 6px;
    color: white;
    cursor: pointer;
    border: none;
    &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }`

const blue = `
background-color: ${bluearr[0]};
    &:hover {
      background-color: ${bluearr[1]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${bluearr[2]};
    }
`;
const red = `
background-color: ${redarr[0]};
    &:hover {
      background-color: ${redarr[1]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${redarr[2]};
    }
`;
const green = `
background-color: ${greenarr[0]};
    &:hover {
      background-color: ${greenarr[1]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${greenarr[2]};
    }
`;
const black = `
background-color: ${blackarr[0]};
    &:hover {
      background-color: ${blackarr[1]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blackarr[2]};
    }
`;


export const BlueButton = styled(Button)`
${defaultstyle}
${blue}
`

export const RedButton = styled(Button)`
${defaultstyle}
${red}
`

export const GreenButton = styled(Button)`
${defaultstyle}
${green}
`

export const BlackButton = styled(Button)`
${defaultstyle}
${black}
`

export const StyeldButton = styled(Button)`
${defaultstyle}
`

