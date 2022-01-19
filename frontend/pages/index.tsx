import type { NextPage } from "next";
import Head from "next/head";
import { ListOfTodos } from "src/components/ListOfTodos";
import { NewTodoForm } from "src/components/NewTodoForm";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<NewTodoForm />
				<ListOfTodos />
			</section>
		</>
	);
};

export default Home;
