import GitHub_InvertoCat_White from '../assets/GitHub_Invertocat_White.svg';
import '../styles/Welcome.css';

function Welcome({ onNext }) {

    return (
        <div className='welcome-container'> 
            <h1 className='welcome-header'>Build your tech résumé. <span className='simple'>Simple.</span> <span className='easy'>Easy.</span> <span className='free'>Free.</span></h1>
            <p className='welcome-paragraph'> Craft a resume to highlight your skills with our guidance! Kickstart your future now!</p>
            <div className='welcome-action-div'>
            <button className='create-button' onClick={onNext}>
                Create Now
            </button>
            <button className='github-button' onClick={() => window.open('https://github.com/bentleylewis', '_blank', 'noopener,noreferrer')}>
                <img src={GitHub_InvertoCat_White} alt="Github" /> GitHub
            </button>
            </div>
    </div>
    )
}

export default Welcome;