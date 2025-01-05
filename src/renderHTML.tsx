import React from 'react';

const renderHTML = (element) => {
  const { type, props, children } = element;
  return createElement(type, { ...props, key: props.key }, children);
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


const createChildren = (children, renderHTML) => { 
  return children.map((child, index) => { 
  	const newChild = ensureProps(child, index); 
  	return typeof newChild === 'string' ? newChild : 
  	renderHTML(newChild); 
  }); 
};

const createElement = (type, props, children) => {
  return React.createElement(type, props, children 
  	&& createChildren(children, renderHTML));
};

export default renderHTML;
