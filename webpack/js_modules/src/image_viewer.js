import big from '../assets/large.jpg'
import small from '../assets/small.png'

import '../styles/image_viewer.css'
export default () => {
  const image = document.createElement('img')
  // image.src = 'http://lorempixel.com/400/400'
  image.src = small
  document.body.appendChild(image)

  const bigImage = document.createElement('img')
  bigImage.src = big
  document.body.appendChild(bigImage)
}