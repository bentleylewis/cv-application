import '../styles/CvDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPrint } from '@fortawesome/free-solid-svg-icons';
function CvDisplay({ data, onBack }) {
    const handlePrint = () => {
        window.print();
    };

    return (
    <div className="resume-container">
        <div className='resume-controls no-print'>
            <button className='nav-button' onClick={onBack} aria-label='Go back'>
                <FontAwesomeIcon icon={faChevronLeft} style={{color: "rgb(255, 255, 255)"}} />
            </button>
            <button className='nav-button' onClick={handlePrint} aria-label='Print resume'>
                <FontAwesomeIcon icon={faPrint} style={{color: "rgb(255, 255, 255)"}} />
            </button>
        </div>
        <div className="resume">
            {/* Header */}
            <div className="resume-header">
                <h1>{data.GeneralInfo.fullName}</h1>
                <p> {data.GeneralInfo.phone} | { data.GeneralInfo.email } | { data.GeneralInfo.github} | {data.GeneralInfo.linkedIn}
                    {/* {data.GeneralInfo.address} {data.GeneralInfo.city} {data.GeneralInfo.zip} */}
                    </p>
            </div>

            {/* Education Section */}
            <section className="resume-section">
                <h2>Education</h2>
                {data.Education.map((entry, index) => (

                <div className="entry" key={index}>
                    <div className="heading-line">
                    <h3>{entry.schoolName}</h3>
                    <p>{entry.location}</p>
                </div>
                <div className="subheading-line">
                    <p>{entry.degreeType} of {entry.fieldOfStudy}</p>
                    <p>{entry.startOfStudy} - {entry.endOfStudy}</p>
                </div>
                </div>
                  ))}
            </section>
               {/* Experience Section */}
            <section className='resume-section'>
                <h2>Experience</h2>

                {data.Experience.map((entry, index) => (
                <div className='entry' key={index}>
                <div className= "heading-line">
                    <h3>{entry.companyName} | {entry.positionTitle} </h3>
                    <p>{entry.dateFrom} - {entry.dateEnd}</p>
                </div>
                <div className="subheading-line">
                    <p>{entry.technologies}</p>
                    <p>{entry.location}</p>
                </div>

                <ul className='bullets'>
                {entry.responsibilities
                    ?.split('\n')
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, index) => (
                    <li key={index}>{line}</li>
                    ))}
                </ul>  
                              
                </div>
                ))}
            </section>

            {/* Projects Section */}
            <section className='resume-section'>
                <h2>Projects</h2>

                {data.Projects.map((entry, index) => (
                <div className='entry' key={index}>
                <div className="heading-line">
                    <h3>{entry.projectName}</h3>
                </div>
                <div className="subheading-line">
                    <p>{entry.technologies}</p>
                </div>
                <ul className='bullets'>
                {entry.description
                    ?.split('\n')
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, index) => (
                    <li key={index}>{line}</li>
                    ))}
                </ul>  
                </div>
                ))}
            </section>

            <section className='resume-section'>
                <h2>Skills</h2>
                <div>
                    <div className='language-line'>
                        <h3>Languages:</h3> <p>{data.Skills.languages}</p>
                    </div>

                    <div className='technologies-line'>
                        <h3>Technologies:</h3> <p>{data.Skills.technologies}</p>
                    </div>
                </div>

            </section>

        </div>
    </div>
    )
}

export default CvDisplay;