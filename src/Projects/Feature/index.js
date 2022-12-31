export default function Feature({link, image, title}) {
    return (
        <article id="project_one">
            <a href={link}><img src={image} />
            <h3>{title}</h3></a>
            <p>This FULL STACK project relies on the MVC paradigm to create a website to allows users to submit images of things that look like other things. </p>
            <a href="https://afternoon-peak-71885.herokuapp.com/">Heroku Link</a>
        </article>
    );
  }