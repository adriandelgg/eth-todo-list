import { useContext, useEffect, useState } from "react";
import { Web3Context } from "src/context/Web3Context";
import { useTodoListener } from "src/hooks/useTodoListener";
import { IoMdTrash } from "react-icons/io";

type ITask = {
	id: string;
	content: string;
	completed: boolean;
}[];

export const Todo = () => {
	const { contract } = useContext(Web3Context);
	const [todos, setTodos] = useState<ITask>([]);
	const newEvent = useTodoListener();

	useEffect(() => {
		if (!contract) return;
		(async () => {
			try {
				const taskCount = +(await contract.taskCount());
				const tasks: ITask = [];
				for (let i = 0; i < taskCount; i++) {
					const { id, content, completed } = await contract.tasks(i);
					if (!content) continue;
					const task = { id: String(id), content, completed };
					tasks.push(task);
				}
				setTodos(tasks);
			} catch (e) {
				console.error(e);
			}
		})();

		return () => {
			setTodos([]);
		};
	}, [contract, newEvent]);

	return (
		<div className="prediction-form mx-auto my-10">
			<h3 className="h3-heading">Todo List</h3>
			{!todos.length ? (
				<h4 className="text-center mt-4">No todos!</h4>
			) : (
				todos.map(({ id, content, completed }) => (
					<div className="flex justify-around items-center mt-3" key={id}>
						<input
							type="checkbox"
							name={id}
							id={id}
							onChange={async () => await contract.completeTask(id)}
							checked={completed}
						/>
						<p className="text-lg px-5">{content}</p>
						<button onClick={async () => await contract.removeTask(id)}>
							{<IoMdTrash color="red" />}
						</button>
					</div>
				))
			)}
		</div>
	);
};
