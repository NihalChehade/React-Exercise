const App = ()=>{
    return(
        <div>
            <Tweet 
            username="NihalChe"
            name="Nihal"
            date={new Date().toDateString()}
            message="Tweeting is Fun!" />
            <Tweet 
            username="RubyA"
            name="Ruby"
            date={new Date().toDateString()}
            message="My lovely Tweet is here!" />
            <Tweet 
            username="AylaA"
            name="Ayla"
            date={new Date().toDateString()}
            message="I like to copycat Tweets!" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));