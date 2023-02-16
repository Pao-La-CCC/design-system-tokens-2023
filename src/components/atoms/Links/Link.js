import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Link = ({ to, children, className }) => {
  return (
    <BrowserRouter>
      <RouterLink to={to} className={className}>
        {children}
      </RouterLink>
    </BrowserRouter>
  );
}

export default Link ;