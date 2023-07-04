import { GiSkills } from 'react-icons/gi';
import PageContainer from "../../Components/PageHeaderContainer";
import { skillsData } from '../../utils/SkillsInfo';
import { Animate } from 'react-simple-animate';
import { AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './style.css'
const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageContainer
                HeaderText="My Skills"
                icon={<GiSkills color="#50ceb1" size={40} />}
            />
            <div className='skills__content-wrapper'>
                {
                    skillsData.map((item, i) => (
                        <div key={i} className='skills__content-wrapper_inner'>
                            <Animate
                                play
                                duration={2}
                                delay={2}
                                start={{
                                    transform: "translateX(-200px)"
                                }}
                                end={{
                                    transform: "translateX(0px)"
                                }}
                            >
                                <h3 className='category-text'>{item.label}</h3>
                                <div>
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity:1", "opacity:0"]}
                                                iterationCount={1}
                                            >
                                                <div key={j} className='progressbar-wrapper'>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        stokeWidth='10'
                                                        strokeColor="#164B60"
                                                        trailWidth='10'
                                                        strokeLinecap='square'
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>

                            </Animate>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
export default Skills;