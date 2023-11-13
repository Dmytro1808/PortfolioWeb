import "./ItemProject.css";
import Btn from "../Btn/Btn";

function ItemProject({ title, img, skills, gitHubLink, siteLink }) {
  return (
    <>
      <div className="hlegal-item">
        <h1 className="title-1">{title}</h1>
        <img className="project-details__cover" src={img} alt={title} />
        <div className="project-details__desc">
          <p>{skills}</p>
        </div>
        <div className="project-details_btn">
          <Btn href={gitHubLink} titlebtn="GitHub" />
          <Btn href={siteLink} titlebtn="See the site" />
        </div>
      </div>
    </>
  );
}

export default ItemProject;
