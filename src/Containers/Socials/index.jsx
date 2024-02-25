import { ImCompass } from 'react-icons/im';
import PageContainer from "../../Components/PageHeaderContainer";
import { Animate } from 'react-simple-animate';
import {Stack} from '@mui/material';
import {FaLinkedin} from 'react-icons/fa';
import { FaInstagram} from "react-icons/fa";
import { AiOutlineGithub} from "react-icons/ai";
import {SiHashnode} from 'react-icons/si';
import {AiFillGitlab} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import './style.css';
import { CiAlarmOn } from 'react-icons/ci';

import React from "react";
import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Exam(props) {
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


const Socials = () => {
    return (
        <section id="skills" className="skills">
            <PageContainer
                HeaderText="Medium"
                icon={<CiAlarmOn color="#50ceb1" size={40} />}
            />
            <Exam/>
            <PageContainer
                HeaderText="Time is Running Out.."
                
            />
          
        </section>
    )
}
export default Socials;