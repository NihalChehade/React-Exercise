const Person = ({ name, age, hoppies }) => {
    const voteText = (age > 18)
        ? 'please go vote!'
        : 'you must be 18';

    const shortName = (name.length > 8)
        ? name.slice(0, 6)
        : name;


    return (
        <div className="mainDiv">
            <p>Learn some information about this person</p>
            <p>
                <b>Name :</b> <span className="colorSpan">{shortName}</span>

            </p>
            <p>
                <b>Age :</b> <span className="colorSpan">{age}</span>
                <h3>{voteText}</h3>
            </p>
            <h2>My Hoppies are :</h2>
            <ul>
                {hoppies.map(h =>
                (
                    <li>
                        <b>{h}</b>
                    </li>
                )
                )}
            </ul>



        </div>
    )

}