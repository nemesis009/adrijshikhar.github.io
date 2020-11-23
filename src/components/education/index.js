const Education = () => {
  return (
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div class="my-auto">
        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex justify-content-between mb-5">
          <div class="resume-content mr-3 ">
            <h3 class="mb-0">Indian Institute of Technology, Roorkee</h3>
            <div class="subheading mb-3">Bachelor of technology</div>
            <p class="para-content">Chemical Engineering</p>
          </div>
          <div class="resume-date px-4">
            <span class="text-primary">Jul 2018 - Jun 2022</span>
          </div>
        </div>

        <div class="resume-item d-flex justify-content-between mb-5">
          <div class="resume-content mr-3 ">
            <h3 class="mb-0">Gulab Rai Montessori</h3>
            <div class="subheading mb-3">PCM with Computer Science</div>
          </div>
          <div class="resume-date px-4">
            <span class="text-primary">Apr 2015 - Mar 2017</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
