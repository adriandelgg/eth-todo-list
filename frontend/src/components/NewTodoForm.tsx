import { useContext, useState, FormEvent } from "react";
import { Web3Context } from "src/context/Web3Context";

export const NewTodoForm = () => {
	const { contract } = useContext(Web3Context);
	const [content, setContent] = useState("");

	async function newTodo(e: FormEvent) {
		e.preventDefault();
		try {
			if (!content) return;
			await contract.createTask(content);
			setContent("");
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<form className="action-card mx-auto" onSubmit={newTodo}>
			<h3 className="h3-heading">Add New Todo</h3>
			<label className="input-label" htmlFor="content">
				Description
			</label>
			<input
				className="input-field"
				type="text"
				name="content"
				id="content"
				required={true}
				value={content}
				onChange={({ currentTarget }) => setContent(currentTarget.value)}
			/>
			<button className="green-btn mt-7" type="submit">
				Create
			</button>
		</form>
	);
};
