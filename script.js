// Add click event listener to the input icon for adding tasks
document.querySelector('.input-icon').addEventListener('click', function () {
    const inputField = document.querySelector('.inputTasks'); // Select the input field for tasks
    const taskText = inputField.value.trim(); // Get the trimmed value from the input field

    // Check if the input field is not empty
    if (taskText) {
        const li = document.createElement('li'); // Create a new list item
        li.className = 'list-contents'; // Assign class name for styling
        li.innerHTML = `${taskText} <div class="cross-icon"></div>`; // Set inner HTML with task text and a cross icon

        document.getElementById('task-list').appendChild(li); // Append the new list item to the task list

        // Clear the input field after adding the task
        inputField.value = '';
    }
});

// Event delegation for removing tasks when clicking on the cross icon
document.getElementById('task-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('cross-icon')) { // Check if the clicked element is a cross icon
        e.target.parentElement.remove(); // Remove the parent list item of the clicked cross icon
    }
});

// Function to clear all tasks from the task list
function clearTaskList() {
    const taskList = document.getElementById('task-list'); // Select the task list element
    taskList.innerHTML = ''; // Clear all contents in the task list
}

// Add keypress event listener to trigger task addition with Enter key
document.querySelector('.inputTasks').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') { // Check if the pressed key is Enter
        document.querySelector('.input-icon').click(); // Trigger click event on input icon to add task
    }
});

// Function to hide theme-related elements
function hideTheme() {
    const themeBack = document.querySelector('.theme-back'); // Select theme background element
    themeBack.style.display = 'none'; // Hide the theme background element

    const doneBtn = document.querySelector('.done-btn'); // Select done button element
    doneBtn.style.display = 'none'; // Hide the done button element
}

// Function to show theme-related elements
function showTheme() {
    const themeBack = document.querySelector('.theme-back'); // Select theme background element
    themeBack.style.display = 'flex'; // Show the theme background element with flex display

    const doneBtn = document.querySelector('.done-btn'); // Select done button element
    doneBtn.style.display = 'flex'; // Show the done button element with flex display
}

// Function to apply bright theme styles
function brightTheme() {
    const root = document.querySelector(':root'); // Select root element for CSS variable manipulation
    const logoIcon = document.querySelector('.logo-icon'); // Select logo icon element
    const addIcon = document.querySelector('.input-icon'); // Select input icon element
    const doneBtn = document.querySelector('.done-btn img'); // Select done button image

    doneBtn.src = 'cross.png'; // Change done button image source for bright theme
    addIcon.src = 'add.png'; // Change input icon image source for bright theme

    const themeBtn = document.querySelector('.theme-icon img'); // Select theme button image
    themeBtn.src = 'down.png'; // Change theme button image source for bright theme

    // Set CSS variables for bright theme colors and background images
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--token', '#f5f7f8');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--back-image-icon', "url(./cross.png)");

    logoIcon.src = 'bucket.png'; // Change logo icon image source for bright theme    
}

// Function to apply dark theme styles
function darkTheme() {
    const root = document.querySelector(':root'); // Select root element for CSS variable manipulation
    const logoIcon = document.querySelector('.logo-icon'); // Select logo icon element
    const addIcon = document.querySelector('.input-icon'); // Select input icon element
    const doneBtn = document.querySelector('.done-btn img'); // Select done button image

    doneBtn.src = 'cross-white.png'; // Change done button image source for dark theme
    addIcon.src = 'add-white.png'; // Change input icon image source for dark theme

    const themeBtn = document.querySelector('.theme-icon img'); // Select theme button image
    themeBtn.src = 'down-white.png'; // Change theme button image source for dark theme

    // Set CSS variables for dark theme colors and background images
    root.style.setProperty('--background', '#1a1a1a');
    root.style.setProperty('--token', '#202221');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--back-image-icon', "url(./cross-white.png)");

    logoIcon.src = 'bucket-white.png'; // Change logo icon image source for dark theme    
}

function yellowTheme() {
    const root = document.querySelector(':root'); // Select root element for CSS variable manipulation
    const logoIcon = document.querySelector('.logo-icon'); // Select logo icon element
    const addIcon = document.querySelector('.input-icon'); // Select input icon element
    const doneBtn = document.querySelector('.done-btn img'); // Select done button image

    doneBtn.src = 'cross.png'; // Change done button image source for bright theme
    addIcon.src = 'add.png'; // Change input icon image source for bright theme

    const themeBtn = document.querySelector('.theme-icon img'); // Select theme button image
    themeBtn.src = 'down.png'; // Change theme button image source for bright theme

    // Set CSS variables for bright theme colors and background images
    root.style.setProperty('--background', 'yellow');
    root.style.setProperty('--token', '#f5f7f8');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--back-image-icon', "url(./cross.png)");

    logoIcon.src = 'bucket.png'; // Change logo icon image source for bright theme    
}