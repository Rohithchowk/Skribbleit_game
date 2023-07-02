import PageContainer from "../../Components/PageHeaderContainer";
import {BsInfoCircleFill} from 'react-icons/bs';

const About=()=>{
    return (
        <section id="about" className="about">
        <PageContainer 
        HeaderText="About" 
        icon={<BsInfoCircleFill color="#50ceb1" size={40}/>}
        />

        </section>
    )
}
export default About;