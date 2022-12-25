interface InputProps {
	onChangeFn: any;
	inputValue: number;
  label: string;
}

const Input = (props: InputProps) => {
	const { onChangeFn, inputValue, label } = props;

	return (
		<div>
      <p style={{margin: 0}}>{label}</p>
			<input
				type="number"
				value={inputValue}
				onChange={(e) => onChangeFn(e.target.value)}
			/>
		</div>
	);
};

export default Input;
