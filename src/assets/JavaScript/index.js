import '../styles/style.css'
// import favicon from '../images/ico/favicon.ico';
// import logo from '../images/png/logo.png';
import Elements from './elements/elements.js' 
import Web3 from 'web3';

const html_elements = new Elements();
const web3 = new Web3('https://babel-api.mainnet.iotex.io');
const account = web3.eth.accounts.create();
console.log("Account created: %s", account.address);
web3.eth.getBalance("0x838e58a712b371c50f66bd1c5296bffe737ed77a", function(err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(web3.utils.fromWei(result, "ether") + " IOTX")
    }
});
// function generateImage(parent_container, path_to_image, alt_text, class_name) {
//     var img = new Image();
//     img.src = path_to_image;
//     img.alt = alt_text;
//     img.classList.add(class_name);
//     parent_container.appendChild(img);

//     return img;
// }

// function generateHTML_Body() {
//     const element = document.createElement('div');
//     element.classList.add('container');
//     generateImage(element, logo, 'logo', 'logo')
//     return element;
// }

// document.body.appendChild(HTML_body);