import Card from './Card';
import FormField from './FormField';
import '../styles/Experience.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function Experience({ onNext, onBack, data, updateData, addExperience, removeExperience }) {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    const handleAddExperience = () => {
        addExperience();
        setExpandedIndex(data.length);
    }

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        updateData(index, {
            ...data[index], [name] : value
        })};

    return (
    <Card title='Work Experience' subhead='Highlight your work experience and achievements' onNext={onNext} onBack={onBack}>
        
        <button className="additional-info-button" title="Additional Experience" onClick={handleAddExperience}>
      <FontAwesomeIcon icon={faBriefcase} style={{color: "rgb(255, 255, 255)"}} />
        </button>
        

        {data.map((entry, index) => (
        <div className='experience-container' key={index}>
        
        <div className={`entry-header ${expandedIndex === index ? 'open' : ''}`} onClick={() => toggleExpanded(index)}>
            <p>{entry.companyName && entry.positionTitle ? `${entry.companyName} - ${entry.positionTitle}` : `Company #${index + 1}`}</p>
        <div className="entry-header-buttons-container">
                <button className="delete-button" title="Delete Experience" onClick={() => removeExperience(index)}> <FontAwesomeIcon icon={faTrashCan}/></button>
                <FontAwesomeIcon icon={faChevronRight}
                  className={`chevron ${expandedIndex === index ? 'open' : ''}`}
                />
                </div>
            </div>

        {expandedIndex === index && (
        <div>
        <div className='company-row-one'>
        <FormField 
        label='Company'
        type='text'
        value={entry.companyName}
        name='companyName'
        onChange = {(e) => handleChange(e, index)}
        />
         <FormField 
        label='Position Title'
        type='text'
        value={entry.positionTitle}
        name='positionTitle'
        onChange = {(e) => handleChange(e, index)}
        />

         <FormField 
        label='location'
        type='text'
        value={entry.location}
        name='location'
        onChange = {(e) => handleChange(e, index)}
        />

    </div>

    <div className='company-row-two'>
        
         <FormField 
        label='Tools'
        type='text'
        value={entry.technologies}
        name='technologies'
        onChange = {(e) => handleChange(e, index)}
        />

        <FormField 
        label='Start Date'
        type='text'
        value={entry.dateFrom}
        name='dateFrom'
        placeholder="Eg: Aug. 2025"
        onChange = {(e) => handleChange(e, index)}
        />

        <FormField 
        label='End Date'
        type='text'
        value={entry.dateEnd}
        name='dateEnd'
        placeholder="Eg: Jan. 2026"
        onChange = {(e) => handleChange(e, index)}
        />
    </div>
        <FormField 
        label='Responsibilities'
        type='textarea'
        value={entry.responsibilities}
        name='responsibilities'
        onChange = {(e) => handleChange(e, index)}
        rows={3}
        placeholder='Write one responsibility per line; each line becomes a bullet in the preview.'
        />
        </div>
        )}
    </div>
    ))}
    </Card>
    
    );
}

export default Experience;