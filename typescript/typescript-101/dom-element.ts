// const input = document.getElementById('input')
// const input:HTMLInputElement = document.getElementById('input')

const input = document.getElementById('input') as HTMLInputElement

input.autofocus = true

input.addEventListener("input", event=> {
  // this will get the error which is typescript casting error
  // console.log(event.currentTarget.value)
  const i = event.currentTarget as HTMLInputElement
  console.log(i.value)
})