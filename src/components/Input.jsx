import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

export default function Input ({ input, onChange, onKeyDown }) {

    return (
        <div className="input-div">
            <FontAwesomeIcon icon={faCity} style={{color: "#ffffff",}} />
            <input className="input" value={input} type="text" placeholder="Enter city name..." onChange={onChange} onKeyDown={onKeyDown} />
            
        </div>
    )
}