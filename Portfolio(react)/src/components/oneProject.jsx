import PropTypes from "prop-types";
// import './project.css';

function Project({ img, title, link}) {
  return (
    <>
      <div className="mt-5">
        <h2>{title}</h2>
        <a href={link}>
          <h4>Link to Repository</h4>
        </a>
      </div>
      <div>
        {" "}
        <img
          className="img-fluid"
          style={{ maxWidth: "50%" }}
          src={img}
          alt={title}
        />{" "}
      </div>
    </>
  );
}
//es lint error proptypes not defined- imported proptypes and defined strings required
Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Project;
