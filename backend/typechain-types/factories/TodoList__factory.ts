/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TodoList, TodoListInterface } from "../TodoList";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "TaskCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    name: "TaskCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "TaskRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskId",
        type: "uint256",
      },
    ],
    name: "completeTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "createTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskId",
        type: "uint256",
      },
    ],
    name: "removeTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "taskCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200093b3803806200093b8339810160408190526200003491620001ac565b6200003f8162000046565b5062000358565b60408051606081018252600080548083526020808401868152848601849052918352600180825294909220835181559051805193949193620000919392850192919091019062000106565b50604091909101516002909101805460ff1916911515919091179055600080549080620000be8362000318565b91905055507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660600054826000604051620000fb9392919062000264565b60405180910390a150565b8280546200011490620002db565b90600052602060002090601f01602090048101928262000138576000855562000183565b82601f106200015357805160ff191683800117855562000183565b8280016001018555821562000183579182015b828111156200018357825182559160200191906001019062000166565b506200019192915062000195565b5090565b5b8082111562000191576000815560010162000196565b600060208284031215620001bf57600080fd5b81516001600160401b0380821115620001d757600080fd5b818401915084601f830112620001ec57600080fd5b81518181111562000201576200020162000342565b604051601f8201601f19908116603f011681019083821181831017156200022c576200022c62000342565b816040528281528760208487010111156200024657600080fd5b62000259836020830160208801620002a8565b979650505050505050565b83815260606020820152600083518060608401526200028b816080850160208801620002a8565b921515604083015250601f91909101601f19160160800192915050565b60005b83811015620002c5578181015183820152602001620002ab565b83811115620002d5576000848401525b50505050565b600181811c90821680620002f057607f821691505b602082108114156200031257634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200033b57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6105d380620003686000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063111002aa1461005c5780638d97767214610071578063b6cb58a51461009c578063c3084117146100b3578063e1e29558146100c6575b600080fd5b61006f61006a3660046103d5565b6100d9565b005b61008461007f366004610486565b610193565b6040516100939392919061049f565b60405180910390f35b6100a560005481565b604051908152602001610093565b61006f6100c1366004610486565b610240565b61006f6100d4366004610486565b6102b1565b60408051606081018252600080548083526020808401868152848601849052918352600180825294909220835181559051805193949193610122939285019291909101906102ff565b50604091909101516002909101805460ff191691151591909117905560008054908061014d83610556565b91905055507f05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab6606000548260006040516101889392919061049f565b60405180910390a150565b6001602081905260009182526040909120805491810180546101b49061051b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e09061051b565b801561022d5780601f106102025761010080835404028352916020019161022d565b820191906000526020600020905b81548152906001019060200180831161021057829003601f168201915b5050506002909301549192505060ff1683565b60008181526001602081905260408220828155919061026190830182610383565b50600201805460ff1916905560008054908061027c83610504565b90915550506040518181527f36a2f40cfe61ace5baf26a6e4f86ffa75c62392fde263d354d42e0e718fa4bd190602001610188565b600081815260016020818152604092839020600201805460ff191690921790915590518281527fc1fa7142cfb933d0855114a3bffde296944c30b727f297c14d0db4d553d3a5c79101610188565b82805461030b9061051b565b90600052602060002090601f01602090048101928261032d5760008555610373565b82601f1061034657805160ff1916838001178555610373565b82800160010185558215610373579182015b82811115610373578251825591602001919060010190610358565b5061037f9291506103c0565b5090565b50805461038f9061051b565b6000825580601f1061039f575050565b601f0160209004906000526020600020908101906103bd91906103c0565b50565b5b8082111561037f57600081556001016103c1565b6000602082840312156103e757600080fd5b813567ffffffffffffffff808211156103ff57600080fd5b818401915084601f83011261041357600080fd5b81358181111561042557610425610587565b604051601f8201601f19908116603f0116810190838211818310171561044d5761044d610587565b8160405282815287602084870101111561046657600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020828403121561049857600080fd5b5035919050565b83815260006020606081840152845180606085015260005b818110156104d3578681018301518582016080015282016104b7565b818111156104e5576000608083870101525b5093151560408401525050601f91909101601f19160160800192915050565b60008161051357610513610571565b506000190190565b600181811c9082168061052f57607f821691505b6020821081141561055057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561056a5761056a610571565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201a422443784c85060e0040bcd7686833aa101b90007ac163d05e42813c10dd3e64736f6c63430008070033";

type TodoListConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TodoListConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TodoList__factory extends ContractFactory {
  constructor(...args: TodoListConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TodoList";
  }

  deploy(
    _content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TodoList> {
    return super.deploy(_content, overrides || {}) as Promise<TodoList>;
  }
  getDeployTransaction(
    _content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_content, overrides || {});
  }
  attach(address: string): TodoList {
    return super.attach(address) as TodoList;
  }
  connect(signer: Signer): TodoList__factory {
    return super.connect(signer) as TodoList__factory;
  }
  static readonly contractName: "TodoList";
  public readonly contractName: "TodoList";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TodoListInterface {
    return new utils.Interface(_abi) as TodoListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TodoList {
    return new Contract(address, _abi, signerOrProvider) as TodoList;
  }
}
