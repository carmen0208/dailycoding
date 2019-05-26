interface HaveName {
  name: string;
}

const names = [
  {"name": "Superman"},
  {"name": "Batman"},
  {"name": "Green Lantern"},
  {"name": "Wonder Woman"},
  {"name": "Flash"}
]
function copyArray<T> (orignal:T[]):T[]  {
  return orignal.slice(0)
}

const clone = copyArray(names)
// clone[0].name