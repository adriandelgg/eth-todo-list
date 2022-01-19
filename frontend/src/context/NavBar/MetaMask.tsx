import { useContext, Dispatch, SetStateAction } from "react";
import { Web3Context } from "../Web3Context";
import { Web3Provider } from "@ethersproject/providers";
import { TodoList, TodoList__factory } from "lib/typechain-types/index";
import { toast } from "react-toastify";
import { handleToast } from "src/helpers/handleToast";

declare let window: any;

export interface Web3 {
	contract: TodoList;
	provider: Web3Provider;
	account: string;
	setWeb3?: Dispatch<SetStateAction<Web3>>;
}

export const MetaMask = () => {
	const { account, setWeb3 } = useContext(Web3Context);

	async function enableEth() {
		const ethereum = window.ethereum;
		try {
			if (ethereum) {
				const provider = new Web3Provider(ethereum);
				const [address] = await ethereum.request({
					method: "eth_requestAccounts"
				});
				const chainId = await ethereum.request({ method: "eth_chainId" });

				if (chainId !== "0x7a69") {
					return handleToast("error", "Must be on the Hardhat network!");
				}

				const signer = provider.getSigner(address);
				const account = signer._address;

				const contract = TodoList__factory.connect(
					"0x5FbDB2315678afecb367f032d93F642f64180aa3",
					signer
				);

				setWeb3 &&
					setWeb3((prev: Web3) => ({
						...prev,
						contract,
						provider,
						account
					}));
			} else if (window.web3) {
				console.log("Update MetaMask");
			} else {
				console.log("Enable MetaMask");
			}
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<div className="py-3">
			{!account ? (
				<button className="metamask-btn" onClick={enableEth}>
					Connect Wallet
				</button>
			) : (
				<button
					className="blue-btn"
					onClick={() =>
						toast.info(`Your wallet address is: ${account}`, {
							autoClose: 3000,
							position: "top-center",
							style: {
								width: 520
							},
							theme: "colored"
						})
					}
				>
					Wallet Connected
				</button>
			)}
		</div>
	);
};
