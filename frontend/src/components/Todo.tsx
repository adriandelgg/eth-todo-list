import { useContext, useEffect, useState } from "react";
import { Web3Context } from "src/context/Web3Context";
import { IoMdTrash } from "react-icons/io";
import { useTodoListener } from "src/hooks/useTodoListener";

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
		<div>
			{todos.map(({ id, content, completed }) => (
				<div className="flex" key={id}>
					<input
						type="checkbox"
						name={id}
						id={id}
						onChange={async () => await contract.completeTask(id)}
						checked={completed}
					/>
					<p>{content}</p>
					<button onClick={async () => await contract.removeTask(id)}>
						{<IoMdTrash />}
					</button>
				</div>
			))}
		</div>
	);
};
