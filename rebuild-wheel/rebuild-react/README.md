

##### Reference:

* [transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx)

  `jsx` is a syntax sugar. and transform-react-jsx is a plugin that `Turn JSX into React function calls`

  **In**

  ```javascript
  var profile = <div>
  <img src="avatar.png" className="profile" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
  </div>;
  ```

  **Out**

  ```javascript
  var profile = React.createElement("div", null,
    React.createElement("img", { src: "avatar.png", className: "profile" }),
    React.createElement("h3", null, [user.firstName, user.lastName].join(" "))
  );
  ```