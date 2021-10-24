type IGreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

const Greet = (props: IGreetProps) => {
	const { messageCount = 0 } = props;

	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome ${props.name}! you have ${messageCount} unread message`
					: `Welcome Guest!`}
			</h2>
		</div>
	);
};

export default Greet;
