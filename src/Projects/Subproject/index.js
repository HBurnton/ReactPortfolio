export default function Subproject({link, deployment, image, title}) {
    return (
    <article class="project">
        <img src={image} />
        <div class="project_info">
            <h3>{title}</h3>
            <br />
            <a href={link}>Github Project Link</a>
            <br />
            <a href={deployment}>Deployment</a>
        </div>
    </article>
    );
  }