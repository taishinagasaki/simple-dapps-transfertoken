import "babel-polyfill";
import Web3 from "web3";

// ブロックチェーンにデプロイしたスマートコントラクトのアドレス
var smartContractAddress = "0x3E6E997a7fb003Ce6232004E7df32aC03441DF19";
var smartContractAdressGoodnight = "0x09a8E34F77DC6f887B4523F30F35E98f1cD7166d"; //新規追加分のアドレス記載todo

// ABI(Application Binary Interface) はブロックチェーンの外からコントラクトを利用するための
// インターフェースの定義です。
var abi = [
		{
			"constant": true,
			"inputs": [],
			"name": "message",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function",
			"signature": "0xe21f37ce"
		},
		{
			"inputs": [
				{
					"name": "initMessage",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor",
			"signature": "constructor"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "newMessage",
					"type": "string"
				}
			],
			"name": "update",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function",
			"signature": "0x3d7403a3"
		}
];

var abigoodnight = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rooms",
      "outputs": [
        {
          "name": "whosTurnId",
          "type": "uint256"
        },
        {
          "name": "roomState",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1bae0ac8"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "message",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe21f37ce"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "goodnightvalueToOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xfca6f324"
    },
    {
      "inputs": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "update",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3d7403a3"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x60fe47b1"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_state",
          "type": "uint256"
        },
        {
          "name": "_message",
          "type": "string"
        },
        {
          "name": "_goodnightcount",
          "type": "uint256"
        },
        {
          "name": "_lastsetvalueaccount",
          "type": "address"
        },
        {
          "name": "_lastValueset",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6d4ce63c"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6352211e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa9059cbb"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "takeOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb2e6ceeb"
    }
];//新規追加分のABIを記述する。todo

let myAccount;
let web3;
let contractInstance;
let contractInstanceGoodnight;

async function initApp() {
  myAccount = (await web3.eth.getAccounts())[0];
  contractInstance = new web3.eth.Contract(abi, smartContractAddress);
  contractInstanceGoodnight = new web3.eth.Contract(abigoodnight, smartContractAdressGoodnight);
}

window.updateMessageValue = async () => {
  const msgString = document.getElementById("value").value;

  if(!msgString){
    return window.alert("MESSAGE VALUE IS EMPTY");
  }

  try {
    let option = {
      from: myAccount,
      gasPrice: "20000000000", // このトランザクションで支払う1ガス当たりの価格。単位は wei。
      gas: "41000",            // ガスリミット。このトランザクションで消費するガスの最大量。
    };
    await contractInstance.methods.update(msgString).send(option);

    console.log('MESSAGE UPDAtTED IN BLOCKCHIAN SUCCESSFULLY',result);
  } catch (err) {
    console.log(err);
  }
};

//JUST COPY Hello.sol
window.updateGoodnightValue = async () => {
  const msgGoodString = document.getElementById("goodnightvalue").value;

  if (!msgGoodString){
  return window.alert("Good message value is empty")
  }

  try {
    let option = {
      from: myAccount,
      gasPrice: "200000000000",
      gas: "41000",
    };
    await contractInstanceGoodnight.methods.update(msgGoodString).send(option);

    console.log('MESSAGE UPDAtTED IN BLOCKCHIAN SUCCESSFULLY',result); 
  } catch (err) {
  console.log(err);
  } 
};

window.refreshMessageValue = async () => {
  try {
    const result = await contractInstance.methods.message().call();
    console.log('Fetched msg value from blockchain:', result);
    document.getElementById("message").innerText = result;
  } catch (err) {
    console.log(err);
  }
};
//JUST COPY Hello.sol
window.refreshGoodnightValue = async () => {
   try {
     const result = await contractInstanceGoodnight.methods.message().call();
     console.log('Fetched msg value from blockchain:', result);
     document.getElementById("goodnight").innerText = result;
   } catch (err) {
     console.log(err);
   }
 };


//ADD set and get value
//set
window.setGoodnightValue = async () => {
  const valueGoodnight = document.getElementById("goodnightsetvalue").value;

  if (!valueGoodnight){
  return window.alert("Good value is empty")
  }

  try {
  let option = {
    from: myAccount,
    gasPrice:  "200000000000",
    gas: "410000",
  };
  await contractInstanceGoodnight.methods.set(valueGoodnight).send(option);

  console.log('MESSAGE SET IN BLOCKCHAIN YOU SET!!', result);
  }catch (err) {
  console.log(err)
  }
};

//get
window.getGoodnightValue = async () => {
  try {
    const result = await contractInstanceGoodnight.methods.get().call();
    console.log('get value from blockchain which you set last time', result);
    var str = result[0] + result[1] + result[2];
    document.getElementById("goodnightgetvalue").innerText = str;
  } catch (err) {
    console.log(err)
  }
};

//balanceOf
window.getBalanceOfAddress = async () => {

  const addresstoknowbalance = document.getElementById("addresstoknowbalance").value;
  if (!addresstoknowbalance){
    return window.alert("address is empty")
  }

  const result = await contractInstanceGoodnight.methods.balanceOf(addresstoknowbalance).call();
  console.log('get value from blockchain which you set last time', result);
  document.getElementById("showBalanceOfAddress").innerText = result;
  try {
  } catch (err) {
    console.log(err)
  }
};

//address own token
window.getTokenOwner = async () => {

  const tokentoknowaddress = document.getElementById("tokentoknowaddress").value;
  if (!tokentoknowaddress){
    return window.alert("token is empty")
  }
  const result = await contractInstanceGoodnight.methods.ownerOf(tokentoknowaddress).call();
  console.log('get address who has token', result);
  document.getElementById("showAddressOfToken").innerText = result;
  try {
  } catch (err) {
    console.log(err)
  }
};

//transfer token
window.transferToken = async () => {

  const tokentoaddress = document.getElementById("tokentoaddress").value;
  if (!tokentoaddress){
    return window.alert("address is empty")
  }
  const tokentosend = document.getElementById("tokentosend").value;
  if (!tokentosend){
    return window.alert("token is empty")
  }
  
  try {
  let option = {
    from: myAccount,
    gasPrice:  "200000000000",
    gas: "410000",
  };
  
  const result = await contractInstanceGoodnight.methods.transfer(tokentoaddress, tokentosend).send(option);
  console.log('transfer token', result);
  } catch (err) {
    console.log(err)
  }
};


window.addEventListener('load', async function() {
// web3 がブラウザのアドオンなどから提供されているかチェックします。(MetaMask)
  if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
    // MetaMask の provider を使う
    let provider = window['ethereum'] || window.web3.currentProvider;

    // MetaMask の provider の利用を可能にします。
    // MetaMask にはプライバシーモードがあり、これが有効になっている場合には、この enable() を使っ
    // てこのサイトでMetaMaskを使う許可をユーザから得る必要があります。
    await provider.enable();

    web3 = new Web3(provider);
  } else {
    // ユーザが web3 を持っていないケースのハンドリング。 おそらく、あなたのアプリを利用するために
    // MetaMask をインストールするように伝えるメッセージを表示する処理を書く必要があります。
    // もしくは、Ethereum ノードがローカルで動いている場合には、
    // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // また、 infura.io の RPC エンドポイントを利用する場合には、
    // var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/your_project_id'));
    // のようにできます。
    console.log('METAMASK NOT DETECTED');
  }

  // これで web3.js を自由に使えるようになりました。
  // アプリを初期化して起動しましょう！
  initApp();
});
