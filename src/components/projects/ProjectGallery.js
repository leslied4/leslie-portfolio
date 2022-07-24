import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';


const ProjectGallery = ({id}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const project = singleProjectData.details[id]

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0">
				{project.hasImage && <img
					src={project.img}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt={project.title + ' logo'}
				/>}
			</div>
		</div>
	);
};

export default ProjectGallery;
