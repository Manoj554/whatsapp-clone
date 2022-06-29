
const TextInput = ({ type, name, placeholder, value, onChange, error }) => {
    return (
        <div className="w-full text-white">
            <input
                className="w-full bg-[#2a3942] py-2 px-6 rounded-md focus:outline-none"
                type={type ? type : 'text'}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            {error && <p className="text-red-500 px-2">{error}</p>}

        </div>
    )
}

export default TextInput