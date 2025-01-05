import React, { useEffect, useState } from 'react'; 
const components = { 
	dropdown: Dropdown 
}; 

const renderElement = (element) => { 
	const { type, props, children } = element; 
	const Component = components[type] || type;
	return React.createElement( 
		type, props, children && 
		children.map((child, index) => 
			typeof child === 'string' ? child : 
			renderElement({ ...child, key: index }) 
	)
};