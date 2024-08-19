function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const message = document.getElementById('message');
    const accessForm = document.getElementById('accessForm');
    const mainContent = document.getElementById('mainContent');
    
    if (codeInput === '35281') {
        accessForm.style.display = 'none';
        mainContent.style.display = 'block';
        message.textContent = ''; // Clear any previous error message
    } else {
        message.textContent = '⚠️ERROR.PLEASE ENTER THE CODE OF THE CREATOR';
        message.style.color = 'red'; // Make the error message red for visibility
    }
}

// Disable right-click and show a message
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('🥱 SORRY!');
});