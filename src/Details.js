import { FaTimes } from 'react-icons/fa'

const Details = ({ explanation, copyright, showDetails, setShowDetails }) => {
    return (
        <div id="media-details-container">
            <div id="media-details">
                <div className="icon-div"><FaTimes onClick={() => setShowDetails(false)} /></div>
                <h4>Description:</h4> <p>{explanation}</p>
                {copyright && <p><span>Image Credit & Copyright:</span> {copyright}</p>}
            </div>
        </div>
    )
}

export default Details
