(() => {
    const downbutton = document.getElementById('down');
    const upbutton = document.getElementById('up');
    const text = document.getElementById('textbox');
  
    downbutton.addEventListener('click', (event) => {
    if(text.value >= 1) {
      text.value--;
    }
    });
    upbutton.addEventListener('click', (event) => {
      text.value++;
    })
})();
