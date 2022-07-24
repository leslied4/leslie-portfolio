import { useState, createContext } from 'react';
// import { projectsData } from '../data/projects';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(singleProjectDataJson.details);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		let result = '' //item.title.toLowerCase().includes(searchProject.toLowerCase()) ? item : searchProject === '' ? item : '';
		if (item.title.toLowerCase().includes(searchProject.toLowerCase())) {
			result = item
		}else if (searchProject === '') {
			result = item
		}
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		if (selectProject === 'all') {
			return true
		}
		let category = item.tags.toLowerCase();
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
