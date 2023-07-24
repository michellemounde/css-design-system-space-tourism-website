import { useState} from 'react'

import data from '../../data.json'

import './Destination.css'

const Destination = () => {
  const [idx, setIdx] = useState(0)

  const destinations = data.destinations

  return (
    <>
      <h2>01 Pick your destination</h2>

      <ul>
        <li><button onClick={() => setIdx(0)}>Moon</button></li>
        <li><button onClick={() => setIdx(1)}>Mars</button></li>
        <li><button onClick={() => setIdx(2)}>Europa</button></li>
        <li><button onClick={() => setIdx(3)}>Titan</button></li>
      </ul>

      <section>
        <h3>{destinations[idx].name}</h3>
        <p>{destinations[idx].description}</p>
        <h4>Avg. distance</h4>
        <p>{destinations[idx].distance}</p>
        <h4>Est. travel time</h4>
        <p>{destinations[idx].travel}</p>
      </section>
    </>
  )
}

export default Destination;
