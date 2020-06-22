import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ name: "ninja", age: 30 });
user.save();
const newUser = new User({ name: "qq", age: 20 });
newUser.save();
// newUser.events
// user.set({ name: "new person", age: 100 });

// console.log(user.get("name"));
// console.log(user.get("age"));

// user.on("change", () => {
//   console.log("changes #1");
// });
// user.on("change", () => {
//   console.log("changes #2");
// });
// user.on("nothing", () => {
//   console.log("nothing");
// });

// user.trigger("change");
// console.log(user);
// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);
