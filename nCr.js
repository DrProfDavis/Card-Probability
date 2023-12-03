function generateDropdowns() {
    document.getElementById('dropdownContainer').innerHTML = '';

    const num = parseInt(document.getElementById('numInput').value);

    if (num > 0 && num < 53 && !isNaN(num)) {
        for (let i = 1; i <= num; i++) {
            const dropdown = document.createElement('select');
            dropdown.name = `dropdown${i}`;
            dropdown.id = `dropdown${i}`;

            for (let j = 1; j <= 3; j++) {
                const option = document.createElement('option');
                option.value = `Option ${j}`;
                option.text = `Option ${j}`;
                dropdown.appendChild(option);
            }

            document.getElementById('dropdownContainer').appendChild(dropdown);
        }
    } else {
        alert('Please enter a valid positive number for total draws');
    }
}

function setAllDropdowns() {
    const firstDropdown = document.getElementById('dropdown1');
    const selectedValue = firstDropdown.options[firstDropdown.selectedIndex].value;

    const num = parseInt(document.getElementById('numInput').value);
    for (let i = 2; i <= num; i++) {
        const dropdown = document.getElementById(`dropdown${i}`);
        dropdown.value = selectedValue;
    }
}