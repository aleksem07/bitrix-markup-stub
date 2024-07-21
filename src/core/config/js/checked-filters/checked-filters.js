document.addEventListener('DOMContentLoaded', () => {
  
  const addCheckedFilters = () => {
    const checkboxes = document.querySelectorAll('.checkbox_input');
    const checkedListBox = document.querySelector('.checked_list');

    checkboxes.forEach((checkbox, idx) => {
      checkbox.addEventListener('change', () => {
        const itemValue = checkbox.value
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        if (checkbox.checked) {
          createLi(checkbox, idx, itemValue, checkedListBox);
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
    initializeChecked();
  };

  addCheckedFilters();
});