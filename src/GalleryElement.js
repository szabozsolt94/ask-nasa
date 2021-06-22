import Details from './Details'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const GalleryElement = ({ title, date, mediaType, url, hdurl, explanation, copyright }) => {

    const [showDetails, setShowDetails] = useState(false)

    return (
        <div>
            {showDetails && <Details explanation={explanation} copyright={copyright} showDetails={showDetails} setShowDetails={setShowDetails} />}
            <><p onClick={() => setShowDetails(!showDetails)}>{title}</p>
                <span style={{ fontSize: '13px' }}>{date}</span>
                {mediaType === "image" ? <a href={hdurl}><img src={url} alt="daily_photo" /></a>
                    : <ReactPlayer url={url} width="350px" />}</>
        </div>
    )
}

export default GalleryElement
