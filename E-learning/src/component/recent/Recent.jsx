import React from "react"

import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <h1>'Recent Property Listed'' </h1>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent