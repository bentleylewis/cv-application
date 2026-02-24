import '../styles/Card.css';

function Card({ title, subhead, children }) {

    return (
        <div className = "card">
            <h2>{title}</h2>
            <h4>{subhead}</h4>
            
            <div className = "card-body">
                {children}
            </div>

        </div>

    )
}

export default Card;