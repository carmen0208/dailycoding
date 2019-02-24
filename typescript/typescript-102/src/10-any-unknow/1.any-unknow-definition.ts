let vAny : any = 10 ; // We can assign anthing to any
let vUnknown: unknown =  10; // We can assign anthing to unknown just like any 


let s1: string = vAny; // Any is assigable to anything 
// let s2: string = vUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)

vAny.mehtod(); // ok anything goes with any
// vUnknown.mehtod(); // not ok, we don't know anything about this variable