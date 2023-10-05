import React from 'react';
import ReactDOM from 'react-dom/client';

const MyComponent1 = React.createElement(
    'h1',
    {
        id: 'header1',
        style: {
            backgroundColor: "aqua",
            color: "Red"
        }
    },
    "Namaste World"
);
const MyComponent2 = React.createElement(
    'h2',
    {
        id: 'header2',
        style: {
            backgroundColor: "Red",
            color: "Yellow"
        }
    },
    "Namaste React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([MyComponent1, MyComponent2]);

