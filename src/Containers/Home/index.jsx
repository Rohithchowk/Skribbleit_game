import React from "react";
import { Animate } from "react-simple-animate";
import "./style.css";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
const handleLink=()=>{
    navigate('/contact');

}
const handleDownload = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = '/CV/ANKUR_SRIVASTAVA_RESUME.pdf'; 
  downloadLink.download = 'ANKUR_SRIVASTAVA_RESUME.pdf'; 
  downloadLink.click();

};
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ankur
          <br />
          Mern stack developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <Stack direction="column">
          <button onClick={handleLink}>Hire me</button>

          <button onClick={handleDownload} className="cv">Download CV</button>
          </Stack>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
