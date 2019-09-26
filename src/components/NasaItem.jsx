import React from "react"
import "./NasaItem.css"

const NasaItem = ({ nasa }) => {
  return (
    <article className="article">
      <div className="">
        <h1 className="f2 ttu tracked">{nasa.title}</h1>
      </div>
      <img src={nasa.url} className="w-50  center grow shadow-5 db" alt="url" />
      <div className="pa3">
        <p className="f4  tc">{nasa.explanation}</p>
        <small className="gray db pv2">
          {nasa.copyright}
          <time>{nasa.date}</time>
        </small>
      </div>
    </article>
  )
}
export default NasaItem
