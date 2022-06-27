import { HiOutlineSearch } from 'react-icons/hi';

const Search = ({ value, onChnage, placeholder }) => {
    return (
        <div className="bg-[#202c33] text-secondary mx-3 flex items-center rounded-lg">
            <button className="py-2 px-4 rounded-xl">
                <HiOutlineSearch />
            </button>
            <input
                className="bg-[#202c33] flex-1 py-2 px-3 text-sm rounded-xl focus:outline-none"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChnage}
            />
        </div>
    )
}

export default Search;