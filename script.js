const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});


sections.forEach(section => observer.observe(section));

const projects = [
  {
    title: "EchoNotes App",
    description: "A note-taking app with alarm reminders.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal web portfolio.",
    link: "#"
  },
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});

var typed= new typed(".text", {
    Strings:["Web Developer" , "Mobile Designer"],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});