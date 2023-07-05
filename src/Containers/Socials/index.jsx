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
import './style.css'
const Socials = () => {
    return (
        <section id="skills" className="skills">
            <PageContainer
                HeaderText="Socials"
                icon={<ImCompass color="#50ceb1" size={40} />}
            />
            
            <div className="skill__content_social">
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
            <div className="skill__content_social_innerContent">
            <div>
            <a href="https://www.instagram.com/_._.ankur._.__/" style={{"display":"inline-block"}}> <FaInstagram color="#E4405F" size="50px"/> </a>
            </div>
            <div>
            <a href="https://github.com/Ankurallin1" style={{"display":"inline-block","marginTop":"50px"}}> <AiOutlineGithub color="#fff" size="50px" /> </a>
            </div>
            <div>
            <a href="https://gitlab.com/ankursrivastava2070" style={{"display":"inline-block","marginTop":"50px"}}> <AiFillGitlab color='orange'  size="50px" /> </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/ankur-srivastava-467384233" style={{"display":"inline-block","marginTop":"50px"}}> <FaLinkedin color="#0077B5" size="50px" /> </a>
            </div>
            <div>
            <a href="https://hashnode.com/@AnkurSrivastava" style={{"display":"inline-block","marginTop":"50px"}}> <SiHashnode  size="50px" /> </a>
            </div>
            <div>
            <a href="https://twitter.com/Ank_LALA" style={{"display":"inline-block","marginTop":"50px"}}> <AiFillTwitterCircle color='white'  size="50px" /> </a>
            </div>
            </div>
            </Animate>    
          </Stack>
        </div>
        </section>
    )
}
export default Socials;