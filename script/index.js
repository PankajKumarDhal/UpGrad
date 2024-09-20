document.querySelector('.course-form').addEventListener('submit', function(event) {
    const domain = document.getElementById('domain').value;
    const qualification = document.getElementById('qualification').value;
    
    if (!domain || !qualification) {
        alert('Please select both domain and qualification.');
        event.preventDefault();
    } else {
        alert('Courses loading...');
    }
});
