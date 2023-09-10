export const pageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gridTemplateRows: 'repeat(15, 1fr)',
    gridColumnGap: '15px',
    gridRowGap: '10px',
    width: '99.2vw',
    height: '99.2vh',
    paddingLeft: '5px',
    paddingRight: '5px',
  };
  
  export const appbarStyle = {
    gridArea: '1 / 1 / 3 / 11',
  };
  
  export const messageStyle = {
    gridArea: '10 / 1 / 16 / 6',
  };
  
  export const infoStyle = {
    gridArea: '10 / 6 / 16 / 11',
  };
  
  export const selectdivStyle = {
    gridArea: '3 / 1 / 10 / 3',
    placeItems: 'stretch',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(7, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '10px',
  };
  
  export const consoleStyle = {
    gridArea: '3 / 3 / 10 / 5',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(7, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '10px',
  };
  
  export const graphStyle = {
    gridArea: '3 / 5 / 10 / 11',
    border: '0.5px solid black',
    borderRadius: '5px',
  };