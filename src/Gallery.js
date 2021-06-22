import { useState } from 'react'
import GalleryElement from './GalleryElement'

const Gallery = ({ formatDate, apiKey }) => {

    const calcStartDate = () => {
        const today = new Date()
        today.setDate(today.getDate() - 19)
        return formatDate(today)
    }

    const [allData, setAllData] = useState([])
    const endDate = formatDate(new Date())
    const startDate = calcStartDate()

    const getData = async url => {
        const res = await fetch(url)
        const data = await res.json()
        if (res.status !== 200) {
            return "Error"
        }
        setAllData(data)
    }

    getData(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`)

    return (
        <div className="gallery-container">
            {allData.map(element =>
                <div className="media-element" key={element.title}>
                    <GalleryElement title={element.title} date={element.date} url={element.url} hdurl={element.hdurl} mediaType={element.media_type} explanation={element.explanation} copyright={element.copyright} />
                </div>
            ).reverse()}
        </div>
    )
}

export default Gallery
