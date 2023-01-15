import '../styles/style.css'
import Elements from './elements/elements.js' 
import Web3 from 'web3';

const html_elements = new Elements();
const web3 = new Web3('ws://localhost:16014');
const account = web3.eth.accounts.create();
console.log("Account created: %s", account.address);
web3.eth.getBalance("0x838e58a712b371c50f66bd1c5296bffe737ed77a", function(err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(web3.utils.fromWei(result, "ether") + " IOTX")
    }
});
