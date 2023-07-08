// props example with a plain js function



function Welcome(props) {
    console.log(props);
    return 'Hello, ' + props.name;
}

console.log(Welcome({ name: 'Sara' , age: 20}));










function Welcome(props) {
    return 'Hello, ' + props.name;
}

function App() {
    return (
        Welcome({ name: 'Sara' })
    );
}
console.log(App());
