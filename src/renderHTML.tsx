import React from 'react'; 

const renderHTML = (element) => { 
	const { type, props, children } = element; 
	return createElement(type, props, children); 
};

const createChildren = (children, renderHTML) => { 
	return children.map(  (child, index) => 
		typeof child === 'string' ? child : 
		renderHTML({ ...child, key: index }) 
	); 
};

const createElement = (type, props, children) => { 
	return React.createElement(type, props, children 
		&& createChildren(children, renderHTML)
	); 
};

export default renderHTML;
