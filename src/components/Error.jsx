import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';


export default function Error () {

    return (
        <div className="error">
            <FontAwesomeIcon icon={faFrown} />
            <span id="error-message"> City not found!</span>
        </div>
    )
}