import "./Setup.css";


const Setup =()=>{
    return(
        <div className="quiz">
            <h1>Setup Quiz</h1>

        <div className="quiz-setup">
            <form>
            <h5>Number Of Questions</h5>
            <input type="number" list="question"></input>
            
            <h4>Category</h4>
            <input type="text" list="category"></input>
            <datalist id="category">
            <option value="sports"></option>
            <option value="politics"></option>
            <option value="history"></option>
            </datalist>

            <h5>Difficulty</h5>
            <input type="text" list="difficult"></input>
            <datalist id="difficult">
            <option value="easy"></option>
            <option value="medium"></option>
            <option value="hard"></option>
            </datalist>
            <button type="submit" className="quiz-startButton">Start</button>
            </form>

            
            
        </div>
        </div>
    )
}

export default Setup;