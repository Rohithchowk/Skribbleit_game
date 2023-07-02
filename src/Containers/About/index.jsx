import PageContainer from "../../Components/PageHeaderContainer";
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from 'react-simple-animate';
import {personalDetails} from '../../utils/AboutMeInfo.js'
import {jobSummary} from '../../utils/AboutMeInfo.js'
import {DiCss3} from 'react-icons/di';
import {BsDatabase} from 'react-icons/bs';
import {FaDev} from 'react-icons/fa';
import {BsGit} from 'react-icons/bs';

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
        </div>
        
        </div>
        </section>
    )
}
export default About;