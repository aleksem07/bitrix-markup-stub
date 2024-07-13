const initializeChecked = () => {
  const checkboxes = document.querySelectorAll('.checkbox_input');
  const checkedListBox = document.querySelector('.checked_list');

  checkboxes.forEach((checkbox, idx) => {
    const itemValue = checkbox.value
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (checkbox.checked) {
      createLi(checkbox, idx, itemValue, checkedListBox);
    }
  });
};
