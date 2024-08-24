function Alert(props) {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
            {props.message}
        </div>
    );
}


function Button(props) {
    return (
        <button className={`btn btn-${props.variant}`}>
            {props.label}
        </button>
    );
}

function Person(props) {
    const nameToDisplay = props.name.length > 8 ? props.name.substring(0, 6) : props.name;
    return (
        <div className="person">
            <p>Learn some information about this person:</p>
            <h3>{nameToDisplay}</h3>
            <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div>
            <Alert type="warning" message="This is a warning alert!" />
            <Button variant="primary" label="Click Me" />
            
            <Person 
                name="Alexander" 
                age={25} 
                hobbies={["Reading", "Gaming", "Coding"]} 
            />
            <Person 
                name="John" 
                age={17} 
                hobbies={["Soccer", "Music", "Drawing"]} 
            />
            <Person 
                name="Elizabeth" 
                age={30} 
                hobbies={["Traveling", "Cooking", "Yoga"]} 
            />
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
