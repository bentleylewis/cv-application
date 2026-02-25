import '../styles/Card.css';

function Card({ title, subhead, children }) {

    return (
        <div className = "card">
            <h2 className="card-title">{title}</h2>
            <p className='card-subtitle'>{subhead}</p>
            
            <div className = "card-body">
                {children}
            </div>

        </div>

    )
}

export default Card;