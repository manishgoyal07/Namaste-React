// To create a react app: 

// 1. Creating a Component
const MyComponent1 = React.createElement(
    'h1', //Tag Name
    {
        id: 'header1',
        style: {
            backgroundColor: "aqua",
            color: "Red"
        } //Props
    },
    "Namaste World" //Child Component
);
const MyComponent2 = React.createElement(
    'h2', //Tag Name
    {
        id: 'header2',
        style: {
            backgroundColor: "Red",
            color: "Yellow"
        } //Props
    },
    "Namaste React" //Child Component
);

// 2. Creating a Root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// 3. Rendering child into the Root (If there are multiple siblings/Child components, put them into an array)
// root.render(MyComponent1); //In case of a Single child component
root.render([MyComponent1, MyComponent2]);

// Every React element is an object at the end of the day
console.log(MyComponent1); //Object
