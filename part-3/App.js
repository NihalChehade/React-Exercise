const App = () => {
    return <div>
        <Person name="Fredrick Jones" age={46} hoppies={['Swimming', 'Hiking', 'Jogging']} />
        <Person name="Ruby Allouche" age={7} hoppies={['Gymnastic', 'Dancing', 'Fashine']} />
        <Person name="Ayla" age={4} hoppies={['Swimming', 'Building Blocks', 'Pretend Play']} />
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));