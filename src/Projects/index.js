import Feature from "./Feature";
import Subproject from "./Subproject";

import lookALike from "../assets/images/look-a-like.jpg"
import weather from "../assets/images/weather.png"
import jsTest from "../assets/images/javascripttest.png"
import readMeGen from "../assets/images/readmegen.png"
import dayplan from "../assets/images/dayplan.png"

export default function Projects() {
    return (
        <section id="projects">

        <h2>Projects</h2>

        <Feature 
        link = "https://github.com/HBurnton/lookALike"
        image = {lookALike}
        title = "Look A Like"
        />
        
        <div id="subproject">
            <Subproject
                link = "https://github.com/HBurnton/theWeathermanWeatherApp"
                image = {weather}
                title = "Weatherman Weather App"
                deployment= "https://hburnton.github.io/theWeathermanWeatherApp/" />

            <Subproject
                link = "https://github.com/HBurnton/javascriptTestCardiacArrest"
                image = {jsTest}
                title = "Vanilla JS Test"
                deployment= "https://hburnton.github.io/javascriptTestCardiacArrest/." />

            <Subproject
                link = "https://github.com/HBurnton/ReadMeGenerator"
                image = {readMeGen}
                title = "Professional README.md Generator"
                deployment= "https://www.youtube.com/watch?v=kiUzZARYJRc" />

            <Subproject
                link = "https://github.com/HBurnton/planTheDayAway"
                image = {dayplan}
                title = "Plan The Day Away"
                deployment= "https://hburnton.github.io/planTheDayAway/" />
        </div>
    </section>
    );
  }