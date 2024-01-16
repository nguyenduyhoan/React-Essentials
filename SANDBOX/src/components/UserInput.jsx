import { useState } from "react";

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedRturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newvalue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newvalue
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investent</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedRturn} onChange={(event) => handleChange('expectedRturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}