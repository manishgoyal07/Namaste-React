// To create a react app: 

// 1. Creating a Component
const MyComponent = React.createElement(
    'h1', //Tag Name
    {
        id: 'header',
        style: {
            backgroundColor: "aqua",
            color: "Red"
        } //Props
    },
    "Namaste World" //Child Component
);
// 2. Creating a Root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// 3. Rendering child into the Root
root.render(MyComponent);