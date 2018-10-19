import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './index';

const configRoute = router => {
    return (
        <div>
            {router.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact ? route.exact : false}
                    component={route.component}
                />
            ))}
        </div>
    );
};

const base = () => {
    return <div className="app">{<Index />}</div>;
};

export default base;
