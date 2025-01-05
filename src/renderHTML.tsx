import React from 'react';
import renderMaterialUI from './renderMaterialUI.tsx';

const renderHTML = (element) => {
  const { type, props, children } = element;

  if (isMaterialUIComponent(type)) {
    return renderMaterialUI(element);
  }

  return createElement(type, props, children);
};

const isMaterialUIComponent = (type) => {
  if (!type) {
    return false;
  }
  return /^[A-Z]/.test(type);
};

const createChildren = (children, renderHTML) => {
  return children.map((child, index) => {
    const newChild = ensureProps(child, index);
    return typeof newChild === 'string' ? newChild : renderHTML(newChild);
  });
};

const ensureProps = (child, index) => {
  if (typeof child === 'string') {
    return child;
  }
  if (!child.props) {
    child.props = {};
  }
  child.props.key = index;
  return child;
};

const createElement = (type, props, children) => {
	if (!type) {
    return;
  }
  return React.createElement(type, props, children && createChildren(children, renderHTML));
};

export default renderHTML;
