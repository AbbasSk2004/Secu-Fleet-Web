document.addEventListener('DOMContentLoaded', () => {
    const jobListingsContainer = document.getElementById('job-listings-container');
    const jobTitleInput = document.getElementById('job-title-input');
    const jobTypeInput = document.getElementById('job-type-input');
    const locationInput = document.getElementById('location-input');
    const searchButton = document.getElementById('search-button');

    let jobListings = [];

    fetchJobListings();

    searchButton.addEventListener('click', filterJobListings);

    function fetchJobListings() {
        fetch('https://secuback.onrender.com/api/careerAndJobs/jobListing')
            .then(response => response.json())
            .then(data => {
                jobListings = data;
                displayJobListings(jobListings);
            })
            .catch(error => {
                console.error('Error fetching job listings:', error);
            });
    }

    function filterJobListings() {
        const jobTitle = jobTitleInput.value.toLowerCase();
        const jobType = jobTypeInput.value.toLowerCase();
        const location = locationInput.value.toLowerCase();

        const filteredData = jobListings.filter(job => {
            return (jobTitle === '' || job.jobTitle.toLowerCase().includes(jobTitle)) &&
                   (jobType === '' || job.jobType.toLowerCase().includes(jobType)) &&
                   (location === '' || job.location.toLowerCase().includes(location));
        });

        displayJobListings(filteredData);
    }

    function displayJobListings(data) {
        jobListingsContainer.innerHTML = '';
        data.forEach(job => {
            const jobCard = createJobCard(job);
            jobListingsContainer.appendChild(jobCard);
        });
    }

    function createJobCard(job) {
        const jobCard = document.createElement('div');
        jobCard.classList.add('bg-blue-100', 'dark:bg-zinc-800', 'p-6', 'rounded-lg', 'shadow-md', 'flex', 'justify-between', 'items-center', 'space-y-4');

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined', 'bg-zinc-100', 'dark:bg-zinc-700', 'p-3', 'rounded-lg');
        iconSpan.textContent = 'business_center';
        jobCard.appendChild(iconSpan);

        const jobDetails = document.createElement('div');
        jobDetails.classList.add('flex', 'items-center', 'space-x-4');

        const jobInfo = document.createElement('div');

        const jobTitle = document.createElement('h2');
        jobTitle.classList.add('text-lg', 'font-bold');
        jobTitle.textContent = job.jobTitle;
        jobInfo.appendChild(jobTitle);

        const jobInfoTags = document.createElement('div');
        jobInfoTags.classList.add('flex', 'space-x-2', 'mt-2');

        const jobTypeTag = document.createElement('span');
        jobTypeTag.classList.add('bg-zinc-100', 'dark:bg-zinc-700', 'text-zinc-600', 'dark:text-zinc-300', 'px-3', 'py-1', 'rounded-full');
        jobTypeTag.textContent = job.jobType;
        jobInfoTags.appendChild(jobTypeTag);

        const jobLocationTag = document.createElement('span');
        jobLocationTag.classList.add('bg-zinc-100', 'dark:bg-zinc-700', 'text-zinc-600', 'dark:text-zinc-300', 'px-3', 'py-1', 'rounded-full');
        jobLocationTag.textContent = job.location;
        jobInfoTags.appendChild(jobLocationTag);

        jobInfo.appendChild(jobInfoTags);
        jobDetails.appendChild(jobInfo);

        const jobSalary = document.createElement('div');
        jobSalary.classList.add('text-right');

        const salaryAmount = document.createElement('div');
        salaryAmount.classList.add('text-lg', 'font-bold', 'text-zinc-900', 'dark:text-zinc-100');
        salaryAmount.textContent = `$${job.salary}`;
        jobSalary.appendChild(salaryAmount);

        const salaryFrequency = document.createElement('div');
        salaryFrequency.classList.add('text-zinc-600', 'dark:text-zinc-400');
        salaryFrequency.textContent = '/Year';
        jobSalary.appendChild(salaryFrequency);

        const applyButton = document.createElement('a'); // Change from button to anchor tag for redirection
        applyButton.classList.add('mt-2', 'bg-blue-600', 'text-white', 'px-4', 'py-2', 'rounded-lg');
        applyButton.textContent = 'Apply Now';
        applyButton.href = `jobDetails.html?id=${job._id}`; // Redirects to jobDetails.html with job ID
        jobSalary.appendChild(applyButton);

        jobCard.appendChild(jobDetails);
        jobCard.appendChild(jobSalary);

        return jobCard;
    }
});