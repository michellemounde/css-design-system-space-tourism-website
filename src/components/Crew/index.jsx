import { useState } from 'react'

import data from '../../data.json'

import './Crew.css'

const Crew = () => {
  const [idx, setIdx] = useState(0)

  const crew = data.crew

  return (
    <>
      <h2>02 Meet your crew</h2>

      <section>
        <h3>{crew[idx].role}</h3>
        <h4>{crew[idx].name}</h4>
        <p>{crew[idx].bio}</p>
      </section>


      <ul>
        <li><button onClick={() => setIdx(0)}>:white_circle:</button></li>
        <li><button onClick={() => setIdx(1)}>:white_circle:</button></li>
        <li><button onClick={() => setIdx(2)}>:white_circle:</button></li>
        <li><button onClick={() => setIdx(3)}>:white_circle:</button></li>
      </ul>
    </>
  )
}

export default Crew;
