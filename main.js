// Sample job data (shared)
const jobs = [
  { title: "Frontend Developer", company: "TechNova", location: "Remote" },
  { title: "Backend Engineer", company: "CodeWorks", location: "New York" },
  { title: "UI/UX Designer", company: "Creative Studio", location: "San Francisco" },
  { title: "Data Analyst", company: "DataCorp", location: "Remote" },
  { title: "Project Manager", company: "AgilePro", location: "Chicago" }
];

// Home page featured jobs
const featuredContainer = document.getElementById('featured-jobs');
if (featuredContainer) {
  jobs.slice(0, 3).forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.classList.add('job-card');
    jobDiv.innerHTML = `
      <h4>${job.title}</h4>
      <p><strong>${job.company}</strong></p>
      <p>${job.location}</p>
    `;
    featuredContainer.appendChild(jobDiv);
  });
}
