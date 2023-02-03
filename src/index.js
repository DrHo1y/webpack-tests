const Web3 = require('web3')

const checkAndInstantiateWeb3 = () => {
  try {
    const web3 = new Web3('https://rpc.ankr.com/eth')
    console.log(web3.eth)
    return web3
  } catch(e) {
    console.error(e)
  }
}

const _ = require('lodash')
const { printMe } = require('./print')

const component = () => {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  const code = document.createElement('code')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)

  code.innerHTML = checkAndInstantiateWeb3()
  element.appendChild(code)

  return element
}

document.body.appendChild(component())