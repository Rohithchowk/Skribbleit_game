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
           Welcome to Tecstasy2k24!!!
          <br />
          Skribble It
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
          <button onClick={()=>{navigate('/Easy')}}>Easy</button>
          <button onClick={()=>{navigate('/Medium')}}>Medium</button>
          <button onClick={()=>{navigate('/Hard')}}>Hard</button>

          </Stack>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
