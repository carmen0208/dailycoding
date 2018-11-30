## S03 React LifeCycle

* Reference:
  * [Understanding React component life-cycle](https://code.likeagirl.io/understanding-react-component-life-cycle-49bf4b8674de)

## S06 HOC and Function as child component


#### HOC Definition
HOC is a function that takes a component and returns a new component

#### Why Higher Order Component

As you build React Application, you will run into a situations where you want to share the same functionality across multiply components.

* The wrapped component receives all the props of container, along with a new props
```javascript
return <WrapperComponent time={this.state.time} {...this.props} />
```



* 