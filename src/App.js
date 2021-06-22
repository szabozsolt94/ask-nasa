import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import Gallery from './Gallery'

function App() {
  const formatDate = date => date.toISOString().substring(0, 10)

  const apiKey = 'your-api-key-comes-here'
  const firstDate = new Date(1995 - 6 - 16)
  const todayDate = new Date()

  const [data, setData] = useState({})
  const [date, setDate] = useState(formatDate(todayDate))
  const [showGallery, setShowGallery] = useState(false)

  useEffect(() => {
    const getData = async url => {
      try {
        const res = await fetch(url)
        if (res.status !== 200) return "Error"
        setData(await res.json())
      } catch (error) {
        console.log('Error: ', error)
      }
    }

    const dateSetByUser = new Date(date)
    getData(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateSetByUser < todayDate && dateSetByUser > firstDate ? date : formatDate(todayDate)}`)
  })

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <p id="date">{data.date}</p>
      <input onChange={(e) => setDate(e.target.value)} type="date" />
      <span id="first-date">First available picture: 1996-06-16</span>

      {data.media_type === "image" ? <a href={data.hdurl}><img src={data.url} alt="daily_photo" /></a> : <ReactPlayer url={data.url} />}

      <p id="title">{data.title}</p>
      <p id="copyright">Image Credit & Copyright: <span>{data.copyright}</span></p>
      <p id="explanation">{data.explanation}</p>

      {!showGallery && <h3 id="gallery-open" onClick={() => setShowGallery(true)}>Click here to see the photos from the past 20 days</h3>}
      {showGallery && <Gallery formatDate={formatDate} apiKey={apiKey} />}
    </div>
  );
}

export default App;
