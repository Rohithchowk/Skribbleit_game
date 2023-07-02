import PageContainer from "../../Components/PageHeaderContainer";
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from 'react-simple-animate';
import {personalDetails} from '../../utils/AboutMeInfo.js'
import {jobSummary} from '../../utils/AboutMeInfo.js'
import {DiCss3} from 'react-icons/di';
import {BsDatabase} from 'react-icons/bs';
import {FaDev} from 'react-icons/fa';
import {BsGit} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import { FaInstagram} from "react-icons/fa";
import { AiOutlineGithub} from "react-icons/ai";
import { Stack } from "@mui/material";

import './style.css'
const About=()=>{
    return (
        <section id="about" className="about">
        <PageContainer 
        HeaderText="About" 
        icon={<BsInfoCircleFill color="#50ceb1" size={40}/>}
        />
        <div className="about__content">
        <div className="about__content_personal">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <h3>Mern Stack Developer</h3>
            <p>{jobSummary}</p>
        </Animate>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h3 className="personalInfo">Personal Information</h3>
        <ul>
            {
                personalDetails.map((item,i)=>(
                    <li key={i}>
                        <span className="title">{item.label}</span>
                        <span className="value">{item.value}</span>
                    </li>
                ))
            }
        </ul>
        </Animate>
        </div>
        <div className="about__content_service">
        <Stack direction="column">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <div className="about__content_service_innerContent">
            <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <DiCss3 size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <BsDatabase size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <BsGit size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            </div>
            </Animate>
            <div className="socials">
         <a href="https://www.instagram.com/_._.ankur._.__/"> <FaInstagram color="#E4405F" size="50px"/> </a>
         <a href="https://www.linkedin.com/in/ankur-srivastava-467384233"> <FaLinkedin color="#0077B5" size="50px" style={{"margin-left":"15px"}}/> </a>
         <a href="https://github.com/Ankurallin1"> <AiOutlineGithub color="#fff" size="50px" style={{"margin-left":"15px"}}/> </a>

          </div>
          </Stack>
        </div>
        
        </div>
        </section>
    )
}
export default About;