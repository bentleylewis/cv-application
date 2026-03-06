import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Card({ title, subhead, children, onNext, onBack }) {

    return (
        <div className = "card">
            <div className ={`nav-buttons-container ${onBack && onNext ? 'both' : 'single'}`}>
                {onBack && (
                    <button className='nav-button' onClick={onBack}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{color: "rgb(255, 255, 255)"}} />
                    </button>
                )}
                {onNext && (
                    <button className='nav-button' onClick={onNext}>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "rgb(255, 255, 255)"}} />
                    </button>
                )}
            </div>
            <h2 className="card-title">{title}</h2>
            <p className='card-subtitle'>{subhead}</p>
            <div className = "card-body">
                {children}
            </div>

        </div>

    )
}

export default Card;