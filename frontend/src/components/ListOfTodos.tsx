import { useContext, useState } from "react";
import { Web3Context } from "src/context/Web3Context";
import { Todo } from "./Todo";

export const ListOfTodos = () => {
	const { contract } = useContext(Web3Context);

	return (
		<div className="prediction-form">
			<h3 className="h3-heading">Todo List</h3>
			<Todo />
		</div>
	);
};
