export default function Subproject({link, deployment, image, title}) {
    const deployText = deployment.toLowerCase().includes('youtube') ? 'Youtube Link' : 'Deployment'


    return (
    <article class="project">
        <img src={image} />
        <div class="project_info">
            <h3>{title}</h3>
            <br />
            <a href={link}>Github Project Link</a>
            <br />
            <a href={deployment}>{deployText}</a>
        </div>
    </article>
    );
  }