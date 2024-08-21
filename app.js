// const heading = React.createElement("h1",
//     {id:"heading",
//      className:"heading" 
//     },
//     "Hello world!");

// const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root);


// root.render(heading);

const child = React.createElement("div",{id:"child"}, 
    React.createElement("h1",{}, "Hi Nested Elemets")
);

const parent = ReactDOM.createRoot(document.getElementById("root"));

parent.render(child);