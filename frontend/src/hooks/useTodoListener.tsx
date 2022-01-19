import { useContext, useEffect, useState } from "react";
import { Web3Context } from "src/context/Web3Context";

export const useTodoListener = () => {
	const { contract } = useContext(Web3Context);
	const [newEvent, setNewEvent] = useState(0);

	useEffect(() => {
		contract.on("TaskCreated", () => setNewEvent(prev => ++prev));
		contract.on("TaskCompleted", () => setNewEvent(prev => ++prev));
		contract.on("TaskRemoved", () => setNewEvent(prev => ++prev));

		return () => {
			contract.removeAllListeners();
		};
	}, [contract]);

	return newEvent;
};
