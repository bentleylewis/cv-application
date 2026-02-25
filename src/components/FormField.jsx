import '../styles/FormField.css'; 

function FormField({ label, type, value, name, onChange }) {
    return (
        <div className = 'field-container'>
            <label className='field-label'>{label}</label>

            <input className="input-field"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            />

        </div>
    )
}

export default FormField;