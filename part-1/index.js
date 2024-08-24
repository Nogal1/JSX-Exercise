// index.js


function FirstComponent() {
    return <h1>My very first component</h1>;
}


function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
}


function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Logan" />
        </div>
    );
}

// Step 4: Render App Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
