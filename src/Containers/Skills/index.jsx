import {BsInfoCircleFill} from 'react-icons/bs';
import PageContainer from "../../Components/PageHeaderContainer";
const Skills=()=>{
    return (
        <section id="skills" className="skills">
        <PageContainer 
        HeaderText="My Skills" 
        icon={<BsInfoCircleFill color="#50ceb1" size={40}/>}
        />

        </section>
    )
}
export default Skills;