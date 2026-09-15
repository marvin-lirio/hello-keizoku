const projects = [

    {
        name: "Keizoku DevOps",
        description:
            "The development studio itself — including its web presence, internal tooling, workflows and future software products.",
        status: "Active"
    },

    {
        name: "Horizonte",
        description:
            "An upcoming website enhancement project currently in development under the Keizoku DevOps portfolio.",
        status: "In Development"
    }

];


const projectsGrid =
    document.querySelector("#projects-grid");


function renderProjects() {

    projectsGrid.innerHTML = "";


    projects.forEach(
        project => {

            const projectCard =
                document.createElement("article");

            projectCard.className =
                "project-card";


            const projectContent =
                document.createElement("div");


            const projectTitle =
                document.createElement("h3");

            projectTitle.textContent =
                project.name;


            const projectDescription =
                document.createElement("p");

            projectDescription.textContent =
                project.description;


            const projectStatus =
                document.createElement("div");

            projectStatus.className =
                "project-status";

            projectStatus.textContent =
                project.status;


            projectContent.appendChild(
                projectTitle
            );

            projectContent.appendChild(
                projectDescription
            );


            projectCard.appendChild(
                projectContent
            );

            projectCard.appendChild(
                projectStatus
            );


            projectsGrid.appendChild(
                projectCard
            );

        }
    );

}


renderProjects();