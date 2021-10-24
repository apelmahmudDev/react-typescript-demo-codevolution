type IGreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
};

const Greet = (props: IGreetProps) => {
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome {props.name}! you have {props.messageCount} unread message`
					: `Welcome Guest!`}
			</h2>
		</div>
	);
};

export default Greet;
