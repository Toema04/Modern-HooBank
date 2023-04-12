const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-praimary outline-none ${styles} rounded-[10px] `}
		>
			Get Statred
		</button>
	);
};

export default Button;
