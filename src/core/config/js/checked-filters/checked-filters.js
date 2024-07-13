  const addCheckedFilters = () => {
    const checkboxes = document.querySelectorAll(".checkbox_input");
    const checkedListBox = document.querySelector('.checked_list');

    checkboxes.forEach((checkbox, idx) => {
      checkbox.addEventListener("change", () => {
        const itemValue = checkbox.value
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        if (checkbox.checked) {
          const li = document.createElement('li');
          const p = document.createElement('p');
          const button = document.createElement('button');

          li.setAttribute('data-value', idx);
          li.classList.add('checked_item');
          button.classList.add('checked_button');
          p.innerHTML = itemValue;

          li.append(p, button);
          checkedListBox.appendChild(li);

          requestAnimationFrame(() => {
            li.style.opacity = 1;
          });

          button.onclick = e => {
            e.stopPropagation();
            checkbox.checked = false;
            li.remove();
          };
        } else {
          const listItem = checkedListBox.querySelector(
            `li[data-value="${idx}"]`
          );

          if (listItem) {
            listItem.remove();
          }
        }
      });
    });
  }

addCheckedFilters();
