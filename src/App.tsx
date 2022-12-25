import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

const App = () => {
	const [startWeight, setStartWeight] = useState(10);
	const [weightIncremenet, setWeightIncrement] = useState(2);
	const [weightLimit, setWeightLimit] = useState(100);

	const [minReps, setMinReps] = useState(8);
	const [maxReps, setMaxReps] = useState(12);

	const [numberOfWeeks, setNumberOfWeeks] = useState(2);

	const [sets, setSets] = useState<any[]>();

	const calculate = () => {
		let tempSets = [];
		let tempReps = minReps;
		let tempWeight = startWeight;

		for (let i = 0; i < numberOfWeeks * 7; i++) {
			if (tempWeight > weightLimit) {
				return;
			}

			tempSets.push({
				reps: tempReps++,
				weight: tempWeight,
			});

			if (maxReps < tempReps) {
				tempReps = minReps;
				tempWeight += weightIncremenet;
			}
		}

		setSets(tempSets);
	};

	return (
		<div className="container">
      <Input label="Minimum Reps" inputValue={minReps} onChangeFn={setMinReps}/>
      <Input label="Maximum Reps" inputValue={maxReps} onChangeFn={setMaxReps}/>
      <Input label="Start Weight" inputValue={startWeight} onChangeFn={setStartWeight}/>
      <Input label="Weight Increment" inputValue={weightIncremenet} onChangeFn={setWeightIncrement}/>
      <Input label="Number of weeks" inputValue={numberOfWeeks} onChangeFn={setNumberOfWeeks}/>

			<button onClick={calculate}>Calculate</button>

      {sets && sets.map((set, index) => {
          return <p key={index}>Reps: {set.reps}, Weight: {set.weight}</p>
      })}
		</div>
	);
};

export default App;
