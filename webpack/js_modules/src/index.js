// import sum from './sum'
// import './image_viewer'

// const total = sum(10, 18)

// console.log(total)

const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () => {
  import('./image_viewer.js').then(module => {
    console.log(module)
    // module.default()
  })
}

document.body.appendChild(button)