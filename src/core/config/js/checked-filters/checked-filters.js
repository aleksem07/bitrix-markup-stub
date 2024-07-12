  const addCheckedFilters = () => {
    const checkboxes = document.querySelectorAll(".checkbox_input");
    const checkedListBox = document.querySelector('.checked_list');

    checkboxes.forEach((checkbox, idx) => {
      checkbox.addEventListener("change", () => {
        const itemValue = checkbox.value
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        if (checkbox.checked) {
          checkedListBox.innerHTML += `<li data-value=${idx}>${itemValue}</li>`;
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

    checkedListBox.addEventListener("click", (e) => {
      const listItem = e.target.closest("li");

      if (listItem) {
        const checkbox = checkboxes[listItem.dataset.value];

        if (checkbox) {
          checkbox.checked = !checkbox.checked;
          listItem.remove();
        }
      }
    })
  }

addCheckedFilters();
