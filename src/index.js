//const Web3 = require('web3')

//const checkAndInstantiateWeb3 = () => {
//  try {
//    const web3 = new Web3('ws://rpc.ankr.com/eth')
//  } catch(e) {
//    console.error(e)
//  }
//}

const _ = require('lodash')
const { printMe } = require('./print')

const component = () => {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())