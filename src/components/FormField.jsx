import '../styles/FormField.css'; 

function FormField({ label, type, value, onChange, placeholder }) {
    return (
        <div className = 'field-container'>
            <label>{label}</label>

            <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}/>

        </div>
    )
}

export default FormField;