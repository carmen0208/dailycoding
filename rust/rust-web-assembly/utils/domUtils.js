export const appendStringToBody = (value) => {
  const text = document.createTextNode(value);
  document.body.appendChild(text);
}
