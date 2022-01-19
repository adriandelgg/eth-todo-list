import type { NextPage } from "next";
import Head from "next/head";
import { NewTodoForm } from "src/components/NewTodoForm";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<NewTodoForm />
			</section>
		</>
	);
};

export default Home;
