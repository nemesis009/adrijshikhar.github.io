const ProjectCard = ({ title, company, date, children }) => {
  return (
    <div class="resume-item d-flex justify-content-between mb-5 pt-3">
      <div class="resume-content mr-3 ">
        <h3 class="mb-0">{title}</h3>
        <div class="subheading mb-3">{company}</div>
        {children}
      </div>
      <div class="resume-date px-4">
        <span class="text-primary">{date}</span>
      </div>
    </div>
  );
};

const Content = ({ children }) => {
  return <>{children}</>;
};

const Para = ({ children }) => {
  return <p className="para-content">{children}</p>;
};

ProjectCard.Content = Content;
ProjectCard.Para = Para;

export default ProjectCard;
