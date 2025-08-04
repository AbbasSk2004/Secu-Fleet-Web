// viewCareers.js

document.addEventListener('DOMContentLoaded', fetchCareers);
const token = localStorage.getItem('jwtToken'); 
function fetchCareers() {
    fetch('https://secuback.onrender.com/api/careerAndJobs/jobListing',{ headers: {
        'Authorization': `Bearer ${token}`
    },})
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('careers-table').querySelector('tbody');
            tableBody.innerHTML = ''; // Clear existing rows

            data.forEach(job => {
                console.log(job);
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${job.jobTitle}</td>
                    <td>${job.description}</td>
                    <td>${job.location}</td>
                    <td>${job.requirements}</td>
                    <td>${job.salary}</td>
                    <td>${job.skills}</td>
                    <td>
                        <button onclick="deleteJobListing('${job._id}')">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching job listings:', error));
}

function deleteJobListing(id) {
    fetch(`https://secuback.onrender.com/api/careerAndJobs/jobListing/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete job listing');
        }
        return response.json();
    })
    .then(data => {
        console.log('Job listing deleted successfully:', data);
        alert('Job listing deleted successfully!');
        fetchCareers();
    })
    .catch(error => {
        console.error('Error deleting job listing:', error);
        alert('Failed to delete job listing. Please try again.');
    });
}
