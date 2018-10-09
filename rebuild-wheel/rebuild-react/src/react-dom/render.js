function _render (vnode, container) {
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

export function render (vnode, container) {
  return _render(vnode, container)
}
