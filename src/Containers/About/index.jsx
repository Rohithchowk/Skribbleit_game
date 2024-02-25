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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './style.css'
import { CiAlarmOn } from "react-icons/ci";


import React from "react";
import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Example(props) {
    var items = [
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
            number :'1',
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
            number :'2',
        },
        {
            name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
            number :'3',
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
            number :'4',
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
            number :'5',
        },
        {
            name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
            number :'6',
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
            number :'7',
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
            number :'8',
        },
        {
            name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
            number :'9',
        },{
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
            number :'10',
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
            number :'11',
        },
        {
            name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
            number :'12',
        }
    ];

    const indicatorStyles = {
        display: 'none', 
    };

    return (
        <Carousel
            navButtonsAlwaysVisible={false} 
            navButtonsAlwaysInvisible={false} 
            stopAutoPlayOnHover={false} 
            indicatorIconButtonProps={{ style: indicatorStyles }} 
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const itemStyle = {
        position: 'relative',
    };

    const imageStyle = {
        width: '100%',
        height: '450px',
        objectFit: 'cover',
    };

    const numberStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff', // Text color
        fontSize: '6em', // Adjust the font size as needed
        fontWeight: 'bold',
    };

    return (
        <div style={itemStyle}>
            <Paper>
                <img src={props.item.name} alt={`cbit-logo-${props.item.number}`} style={imageStyle} />
                <Typography variant="h3" style={numberStyle}>
                    {props.item.number}
                </Typography>
            </Paper>
        </div>
    )
}


const About=()=>{
    return (
        <section id="about" className="about">
        <PageContainer 
        HeaderText="Easy" 
        icon={<CiAlarmOn color="#50ceb1" size={40}/>}
        />
        {/* <div className="about__content">
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
            
          </Stack>
        </div>
        
        </div> */}
        
        <Example/>
        <PageContainer 
        HeaderText="Time is Running Out..." 
       
        />
        </section>
    )
}
export default About;