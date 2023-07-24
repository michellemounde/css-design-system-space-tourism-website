import { useState } from 'react'

import data from '../../data.json'

import './Technology.css'

const Technology = () => {
  const [idx, setIdx] = useState(0)

  const technologies = data.technology

  return (
    <>
      <h5>03 Space launch 101</h5>

      <ul>
        <li><button onClick={() => setIdx(0)}>1</button></li>
        <li><button onClick={() => setIdx(1)}>2</button></li>
        <li><button onClick={() => setIdx(2)}>3</button></li>
      </ul>

      <p>The terminology...</p>

      <section>
        <h3>{technologies[idx].name}</h3>
        <p>{technologies[idx].description}</p>
      </section>
    </>
  )
}

export default Technology;
