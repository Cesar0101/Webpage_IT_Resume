const dynamicTitle = document.querySelector('.Profile_title');
const fullTitle = dynamicTitle.textContent;
dynamicTitle.textContent = ""; 
let index = 0;

function typeWriter() {
  if (index < fullTitle.length) {
    dynamicTitle.textContent += fullTitle.charAt(index);
    index++;
    setTimeout(typeWriter, 111); 
  }
}

typeWriter();
