interface Admin {
  id: string;
  role: string;
}
interface User {
  email: string;
}
// when input can be both interface
function redirect(usr: Admin | User) {
  // if((<Admin>usr).role !== undefined) {
  // use in to cast the interface
  if ("role" in usr) {
    console.log(`redirect to admin home page for user : ${usr.id}`)
  } else {
    console.log(`redirect to home page for user : ${usr.email}`)
  }
}