import big from '../assets/large.jpg'
import small from '../assets/small.png'

import '../styles/image_viewer.css'

const image = document.createElement('img')
image.src = 'http://lorempixel.com/400/400'


document.body.appendChild(image)