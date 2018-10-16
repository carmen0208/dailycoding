import Component from '../react/component'

function _render (vnode) {
  console.log(vnode)
  // vnode.tag
  // vnode.children
  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode)
    return textNode
  }

  if (typeof vnode.tag === 'function') {
    // attribute is a kind of props that set to this prop
    // ex: <img src="avatar.png" className="profile" />
    // React.createElement("img", { src: "avatar.png", className: "profile" }),
    const component = createComponent(vnode.tag, vnode.attribute)
  }
  const dom = document.createElement(vnode.tag)
  if(vnode.children) {
    vnode.children.forEach(child => render(child, dom))
  }
  return dom
  // vnode.attrs
}

function createComponent(component, props) {
  let inst
  // 如果是类定义组件，则直接返回实例
  if ( component.prototype && component.prototype.render) {
    inst = new component( props )
  // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component( props )
    inst.constructor = component
    inst.render = function() {
      return this.constructor( props )
    }
  }
  return inst
}
export function render (vnode, container) {
  return container.appendChild(_render(vnode))
}
