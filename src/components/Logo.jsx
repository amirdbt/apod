import React from "react"
import Tilt from "react-tilt"
import "./Logo.css"
import Particles from "react-particles-js"

const Logo = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 130,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  return (
    <div>
      <Particles className="particles" params={particlesOptions} />
      <header className="logo bg-white black-80 tc pv4 avenir shadow-4">
        <Tilt
          className="Tilt br2 shadow-4 center"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner pa3">
            <span role="img">
              {" "}
              <img
                style={{ paddingTop: "15px" }}
                alt="nasa"
                src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
              />{" "}
            </span>
          </div>
        </Tilt>

        <h2 className="mt2 mb0 f6 fw4 ttu tracked">
          Astronomy Picture of the day
        </h2>
      </header>
    </div>
  )
}

export default Logo
