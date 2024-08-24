
function Tweet(props) {
    return (
        <div className="tweet">
            <h3>{props.name} <span>@{props.username}</span></h3>
            <p>{props.message}</p>
            <small>{props.date}</small>
        </div>
    );
}


function App() {
    return (
        <div>
            <Tweet 
                username="wizard101" 
                name="Grim" 
                date="2024-08-24" 
                message="Just finished casting a new spell!" 
            />
            <Tweet 
                username="fight_master" 
                name="Charlie" 
                date="2024-08-23" 
                message="Always have to practice, you'll never get better if you don't." 
            />
            <Tweet 
                username="dev_druid" 
                name="Druid" 
                date="2024-08-22" 
                message="Nature and code, what a perfect blend." 
            />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
