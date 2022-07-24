import { useContext } from 'react';
// import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
// import ProjectsFilter from './ProjectsFilter';

const ProjectsGridLess = () => {
	const {
		projects,
		// searchProject,
		// setSearchProject,
		// searchProjectsByTitle,
		// selectProject,
		// selectProjectsByCategory,
		// setSelectProject,
	} = useContext(ProjectsContext);

	let displayProjects = []

  for (let index = 0; index < 3; index++) {
    displayProjects.push(projects[index]);
  }

	// if (selectProject) {
	// 	displayProjects = selectProjectsByCategory.map((project, index) => (
	// 		<ProjectSingle
	// 			id={index}
	// 			title={project.title}
	// 			category={project.category}
	// 			image={project.img}
	// 			key={project.id}
	// 		/>
	// 	))
	// } else {
	// 	if (searchProject) {
	// 		displayProjects = searchProjectsByTitle.map((project, index) => (
	// 			<ProjectSingle
	// 				id={index}
	// 				title={project.title}
	// 				category={project.category}
	// 				image={project.img}
	// 				key={project.id}
	// 			/>
	// 		))
	// 	} else {
  //   }
	// }
  displayProjects = displayProjects.map((project, index) => (
    <ProjectSingle
      id={index}
      title={project.title}
      category={project.category}
      image={project.img}
      key={project.id}
    />
  ))

	return (
		<section className="py-5 sm:py-10 mt-3 sm:mt-3">
			<div className="text-center mb-12 sm:mb-12">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects Portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">

			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{displayProjects}
			</div>
		</section>
	);
};

export default ProjectsGridLess;
