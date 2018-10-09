function createElement (tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}
const React = {
  createElement
}
// const element = (
//   <div>
//     hello<span>world!</span>
//   </div>
// )

// console.log(element)

function render (vnode, container) {
  console.log(vnode)
  // vnode.tag
  // vnode.children
  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }
  const dom = document.createElement(vnode.tag)
  vnode.children.forEach(child => render(child, dom))
  return container.appendChild(dom)
  // vnode.attrs
}

const ReactDOM = {
  render: (vnode, container) => {
    return render(vnode, container)
  }
}

ReactDOM.render(
  <h1> Hello World</h1>,
  document.getElementById('root')
)
