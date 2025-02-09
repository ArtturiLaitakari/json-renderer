import React from 'react';
import * as MaterialUI from '@mui/material';

const renderMaterialUI = (element) => {
  const { type, props, children } = element;
  const { key, ...restProps } = props || {};
  const Component = getMaterialUIComponent(type); 

  if (!Component) { 
    console.error(`Unknown Material-UI component: ${type}`); 
    return null; 
  }
  return (
    <Component key={key} {...restProps}>
      {children}
    </Component>
  ); 
};
const getMaterialUIComponent = (type) => { 
  return MaterialUI[type] || null; 
};

export default renderMaterialUI;
