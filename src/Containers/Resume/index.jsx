import React from "react";
import PageContainer from "../../Components/PageHeaderContainer/index";
import { BsPeopleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { resume } from "../../utils/ResumeInfo";
import './style.css';
import {MdWork} from 'react-icons/md';
import { CiAlarmOn } from "react-icons/ci";

import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Exa(props) {
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
        height: '520px',
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
                <Typography variant="h1" style={numberStyle}>
                    {props.item.number}
                </Typography>
            </Paper>
        </div>
    )
}


const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageContainer
                HeaderText="Hard"
                icon={<CiAlarmOn color="#50ceb1" size={40} />}
            />
      <Exa/>

      <PageContainer
                HeaderText="Time is Running Out ..."
                
            />
    </section>
  );
};
export default Resume;
