import PropTypes from 'prop-types';
import './project.css';


function Project({ img, title, link, repo }) {
    
        return (
            <div className = "project">
                <img src = {img} alt = {title}/>
                <h2>{title}</h2>
                <a href = {link}/>
                <a href = {repo}/>
            </div>
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