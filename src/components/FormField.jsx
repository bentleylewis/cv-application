import '../styles/FormField.css'; 

function FormField({ label, type, value, name, onChange, rows, placeholder, options }) {
    return (
        <div className = 'field-container'>
            <label className='field-label'>{label}</label>
            {type === 'textarea' ? (
                <textarea 
                    className="input-field"
                    value={value}
                    name={name}
                    onChange={onChange}
                    rows={rows}
                    placeholder={placeholder}
                />
            ) : type === 'select' ? (
                <select
                    className="input-field"
                    value={value}
                    name={name}
                    onChange={onChange}
                >
                    <option value="">{placeholder || 'Select an option'}</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input 
                    className="input-field"
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </div>
    )
}

export default FormField;