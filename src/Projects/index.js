import Feature from "./Feature";

export default function Projects() {
    return (
        <section id="projects">

        <h2>Projects</h2>

        {/* <article id="project_one">
            <a href=""><img src="./assets/images/look-a-like.jpg" />
            <h3>Look A Like</h3></a>
            <p>This FULL STACK project relies on the MVC paradigm to create a website to allows users to submit images of things that look like other things. </p>
            <a href="https://afternoon-peak-71885.herokuapp.com/">Heroku Link</a>
        </article> */}
        <Feature 
        link = "https://github.com/HBurnton/lookALike"
        image = "./assets/images/look-a-like.jpg"
        title = "Look A Like"
        />


        <div id="subproject">

            <article class="project">
                <img src="./assets/images/weather.png" />
                <div class="project_info">
                    <h3>Weather Man Weather App</h3>
                    <br />
                    <a href="https://github.com/HBurnton/theWeathermanWeatherApp">Github Project Link</a>
                    <br />
                    <a href="https://hburnton.github.io/theWeathermanWeatherApp/">Deployment</a>
                </div>
            </article>

            <article class="project">
                <img src="./assets/images/javascripttest.png" />
                <div class="project_info">
                    <h3>Javascript Test</h3>
                    <br />
                    <a href="https://github.com/HBurnton/javascriptTestCardiacArrest">Github Project Link</a>
                    <br />
                    <a href="https://hburnton.github.io/javascriptTestCardiacArrest/">Deployment</a>
                </div>
            </article>

            <article class="project">
                <img src="./assets/images/readmegen.png" />
                <div class="project_info">
                    <h3>Professional README.md Generator</h3>
                    <br />
                    <a href="https://github.com/HBurnton/ReadMeGenerator">Github Project Link</a>
                    <br />
                    <a href="https://www.youtube.com/watch?v=kiUzZARYJRc">Demo</a>
                </div>
            </article>

            <article class="project">
                <img src="./assets/images/dayplan.png" />
                <div class="project_info">
                    <h3>Plan The Day Away</h3>
                    <br />
                    <a href="https://github.com/HBurnton/planTheDayAway">Github Project Link</a>
                    <br />
                    <a href="https://hburnton.github.io/planTheDayAway/">Deployment</a>
                </div>
            </article>
        </div>
    </section>
    );
  }