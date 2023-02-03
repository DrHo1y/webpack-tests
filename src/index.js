const Web3 = require('web3')

const checkAndInstantiateWeb3 = async () => {
  try {
    const mainnet = 'https://rpc.ankr.com/eth'
    const wallet = '0x24A2194D4f6865CA474E454332bA8f08d41BDAdF'
    const web3 = new Web3(new Web3.providers.HttpProvider((mainnet)))
    let balance = await web3.eth.getBalance(wallet)
    balance = balance
    balance = Number(balance)
    console.log(balance)
    balance = balance / 1000000000000000000
    balance = balance.toFixed(8)
    
    const el = document.createElement('div')
    el.innerHTML = `${balance} ETH`
    document.body.append(el)

  } catch(e) {
    console.error(e)
  }
}

const _ = require('lodash')
const { printMe } = require('./print')

const component = () => {
  const element = document.createElement('div')
  const br = document.createElement('br')
  const code = document.createElement('code')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  element.appendChild(br)

  code.innerHTML = 'lol'
  element.appendChild(code)

  return element
}

document.body.appendChild(component())
document.onload = checkAndInstantiateWeb3()