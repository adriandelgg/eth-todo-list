import type { NextPage } from "next";
import Head from "next/head";
import { NewTodoForm } from "src/components/NewTodoForm";
import { Todo } from "src/components/Todo";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<h1 className="main-heading">🔥 Ethereum Todo List 📝</h1>
				<NewTodoForm />
				<Todo />
			</section>
		</>
	);
};

export default Home;
