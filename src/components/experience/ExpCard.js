const ExpCard = ({ postition, location, date, ...props }) => {
  return (
    <div class="resume-item d-flex justify-content-between mb-5">
      <div class="resume-content mr-3 ">
        <h3 class="mb-0">{postition}</h3>
        <div class="subheading mb-3">{location}</div>
        {props.children}
      </div>
      <div class="resume-date px-4">
        <span class="text-primary">{date}</span>
      </div>
    </div>
  );
};
export default ExpCard;
