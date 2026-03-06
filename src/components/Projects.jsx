import Card from "./Card";
import '../styles/Projects.css'
import FormField from "./FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCode, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Projects({ data, onBack, onNext, updateData, addProject, removeProject}) {
    
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    const handleAddProject = () => {
        addProject();
        setExpandedIndex(data.length);
    }

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        updateData(index, {
            ...data[index], [name] : value
        })
    };
    
    return (
        <Card title="Personal Portfolio" subhead="Show off the Projects you've worked on" onBack={onBack} onNext={onNext}>
          
          <button className="additional-info-button" title= "Additional Project" onClick={handleAddProject}>
            <FontAwesomeIcon icon={faCode} style={{color: "rgb(255, 255, 255)"}}></FontAwesomeIcon>
          </button>

          {data.map((entry, index) => (
            <div className="project-container" key={index}>

            <div className={`entry-header ${expandedIndex === index ? 'open' : ''}`} onClick={() => toggleExpanded(index)}>
                <p>{entry.projectName ? `${entry.projectName}` : `Project #${index + 1}`}</p>
                <div className="entry-header-buttons-container">
                    <button 
                    className="delete-button" 
                    title="Delete Project" 
                    onClick={(e) => {
                        e.stopPropagation();
                        removeProject(index);
                    }}> 
                    <FontAwesomeIcon icon={faTrashCan}/></button>
                    <FontAwesomeIcon icon={faChevronRight}
                    className={`chevron ${expandedIndex === index ? 'open' : ''}`}
                    />
                </div>
            </div>  

                {expandedIndex === index && (
                <div>
                <FormField 
                label="Project Name"
                type='text'
                value={entry.projectName}
                name="projectName"
                onChange={(e) => handleChange(index, e)}
                />

                <FormField 
                label="Technologies/Languages Used"
                type='text'
                value={entry.technologies}
                name="technologies"
                onChange={(e) => handleChange(index, e)}
                />

                <FormField 
                label="Project Description"
                type='textarea'
                value={entry.description}
                name="description"
                onChange={(e) => handleChange(index, e)}
                rows={3}
                placeholder='Each new line will act as a bullet point'
                />
                </div>
            )}
            </div>
          ))}
        </Card>
    )
}

export default Projects;