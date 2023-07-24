import { useState} from 'react'

import data from '../../data.json'

import './Destination.css'

const Destination = () => {
  const [idx, setIdx] = useState(0)

  const destinations = data.destinations

  return (
    <>
      <h5>01 Pick your destination</h5>

      <ul>
        <li><button onClick={() => setIdx(0)}>Moon</button></li>
        <li><button onClick={() => setIdx(1)}>Mars</button></li>
        <li><button onClick={() => setIdx(2)}>Europa</button></li>
        <li><button onClick={() => setIdx(3)}>Titan</button></li>
      </ul>

      <section>
        <h2>{destinations[idx].name}</h2>
        <p>{destinations[idx].description}</p>
        <p>Avg. distance</p>
        <h5>{destinations[idx].distance}</h5>
        <p>Est. travel time</p>
        <h5>{destinations[idx].travel}</h5>
      </section>
    </>
  )
}

export default Destination;
