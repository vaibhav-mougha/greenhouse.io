

import React from 'react'
import style from "./Prefooter.module.css"

const Prefooter = () => {
  return (
    <>
    <div className={style.prefooter}>
        <div className={style.container}>
          <p className={style.heading}>Interested in speaking or sponsoring an event?</p>
          <button className={style.btn}>Get in touch</button>
        </div>
        <div className={style.prefooterImage}>
          <img src="https://sharp.services.greenhouse.io/production/Photo-of-a-woman-wearing-a-headdress-n.png?auto=format&fit=max&lossless=true&q=90&w=426&s=efbf30b0032415c27114661976fb1308ac70708cc11d1f5ceca5c4f67344fbef" />
        </div>
      </div>
      
    </>
  )
}

export default Prefooter
