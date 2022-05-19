// document.body.style.backgroundColor = 'aqua';

let container = document.createElement('div');
container.style.width = '70vw';
container.style.height = '70vh';
container.style.boxShadow = '1px 1px 8px 2px gray';
container.style.margin = '15vh auto';
container.style.padding = '10px';
container.style.boxSizing = 'border-box';
document.body.appendChild(container);

let title = document.createElement('h1');
title.innerText = 'SIGN IN';
title.style.textAlign = 'center';
container.appendChild(title);

let form = document.createElement('form');

let login = document.createElement('input');
login.placeholder = 'Login  . . .';
login.style.outline = 'none';
login.style.width = '100%';
form.appendChild(login);

container.appendChild(form);
