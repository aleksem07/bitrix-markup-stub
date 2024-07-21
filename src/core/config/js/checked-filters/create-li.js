const createLi = (checkbox, idx, value, checkedElements) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const button = document.createElement('button');

  li.setAttribute('data-value', idx);
  li.classList.add('checked_item');
  button.classList.add('checked_button');
  p.innerHTML = value;

  li.append(p, button);
  checkedElements.appendChild(li);

  requestAnimationFrame(() => {
    li.style.opacity = 1;
  });

  button.onclick = e => {
    e.stopPropagation();
    checkbox.checked = false;
    li.remove();
  };
};

