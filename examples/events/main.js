// document.querySelector('input').oninput = handleInput;
document
  .querySelector('input')
  .addEventListener('input', () => {
    handleInput()
  });

document
  .querySelector('input')
  .addEventListener('input', () => {
    const tagInput = document.querySelector('input');
    const value = tagInput.value;

    tagInput.value = value.replace(/[0-9]/, '');

    console.log(value.split("A").length - 1);
});

window
  .addEventListener('keyup', (event) => {
    // console.log(event.code);

    if(event.code === 'Enter') {
        console.log(window.getSelection().toString());
    }
  })

function handleInput() {
    const tagP = document.querySelector('p');
    const tagInput = document.querySelector('input');

    tagP.innerHTML = tagInput.value.toUpperCase();

    tagInput.value = tagInput.value.toUpperCase();
    
}