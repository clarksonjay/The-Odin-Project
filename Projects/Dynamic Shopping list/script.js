const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(span);
  span.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  // listItem.append(span, `${myItem}`, listBtn, 'Delete');

  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();

});