import { ICON_jnv, ICON_mnnit } from "../images";

const Education = () => {
  return (
    <div class="education p-5">
      <div class="education-child heading">Formal Education</div>
      <div class="education-child holder">
        <div class="holder-child education-card-1">
          <div class="edu-class-head">
            <h2>B. Tech.</h2>
          </div>
          <div class="edu-class-body">
            <a href="http://mnnit.ac.in" target="_blank" rel="noreferrer">
              <img class="edu-logo" src={ICON_mnnit} alt="MNNIT icon" />
            </a>
            <h3>Motilal Nehru National Institute of Technology Allahabad</h3>
            <h4>
              <strong>Electronics &amp; Communication :</strong> 7.25 (Currently
              in 6th Semester)
            </h4>
          </div>
        </div>

        <div class="holder-child education-card-1">
          <div class="edu-class-head">
            <h2>Class XII</h2>
          </div>
          <div class="edu-class-body">
            <a
              href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              <img class="edu-logo" src={ICON_jnv} alt="JNV Icon" />
            </a>
            <h3>Jawahar Navodaya Vidyalaya Sonbhadra</h3>
            <h4>
              <strong>CBSE :</strong> 92.8%
            </h4>
          </div>
        </div>

        <div class="holder-child education-card-1">
          <div class="edu-class-head">
            <h2>Class X</h2>
          </div>
          <div class="edu-class-body">
            <a
              href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              <img class="edu-logo" src={ICON_jnv} alt="JNV Icon" />
            </a>
            <h3>Jawahar Navodaya Vidyalaya Sonbhadra</h3>
            <h4>
              <strong>CBSE :</strong> 91.2%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
