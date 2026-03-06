import Card from "./Card";
import FormField from "./FormField";
import '../styles/Education.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGraduationCap, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Education ({ onBack, onNext, data, updateData, addEducation, removeEducation }) {
  
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    }

    const handleAddEducation = () => {
      addEducation();
      setExpandedIndex(data.length);  // Expand the newly added entry
    }

    const handleChange = (e, index) => {
    const {name, value} = e.target;
    updateData(index, {
     ...data[index], [name] : value
     })};

   return (
  <Card title= "Education" subhead="Demonstrate your qualifications, skills, and readiness for the job. List information in most recent first!" onBack={onBack} onNext={onNext}>
    
    <button className="additional-info-button" title="Additional Education" onClick={handleAddEducation}>
      <FontAwesomeIcon icon={faGraduationCap} style={{color: "rgb(255, 255, 255)"}} />
    </button>
    
    {data.map((entry, index) => (
    <div className="school-field-container" key={index}>

    <div className={`entry-header ${expandedIndex === index ? 'open' : ''}`} onClick={() => toggleExpanded(index)}>
      <p>{entry.schoolName || `School #${index + 1}`}</p>
      <div className="entry-header-buttons-container">
        <button className="delete-button" title="Delete Education" 
        onClick={(e) => {
          e.stopPropagation();
          removeEducation(index);
        }}> 
          <FontAwesomeIcon icon={faTrashCan}/></button>
        <FontAwesomeIcon icon={faChevronRight}
          className={`chevron ${expandedIndex === index ? 'open' : ''}`}
        />
        </div>
    </div>

      {expandedIndex === index && (
        <div>
    <div className="row-one">
      <FormField label= "School Name" 
      type='text' 
      value={entry.schoolName} 
      name={'schoolName'}
      onChange={(e) => handleChange(e, index)}
      />

      <FormField label= "Start of Study" 
      type='text' 
      value={entry.startOfStudy} 
      name={'startOfStudy'}
      placeholder="Eg: Aug. 2024"
      onChange={(e) => handleChange(e, index)}
      />

      <FormField label= "End of Study" 
      type='text' 
      value={entry.endOfStudy} 
      name={'endOfStudy'}
      placeholder="Eg: May. 2026"
      onChange={(e) => handleChange(e, index)}
      />

    </div>

    <div className="row-two">

      <FormField label= "Degree Type" 
      type='select' 
      value={entry.degreeType} 
      name={'degreeType'}
      onChange={(e) => handleChange(e, index)}
      options={['High School Diploma', 'Associate', "Bachelor's", "Master's", 'Doctorate', 'Certificate']}
      placeholder="Select degree type"
      />

     <FormField label= "Field of Study" 
      type='text' 
      value={entry.fieldOfStudy} 
      name={'fieldOfStudy'}
      onChange={(e) => handleChange(e, index)}
      />

      <FormField label= "Location" 
      type='text' 
      value={entry.location} 
      name={'location'}
      onChange={(e) => handleChange(e, index)}
      />
      
    </div>
  </div>
      )}

    </div>
     ))}
  </Card>
   )
};

export default Education;