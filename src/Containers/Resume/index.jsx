import {BsInfoCircleFill} from 'react-icons/bs';
import PageContainer from "../../Components/PageHeaderContainer";
const resume=()=>{
    return (
        <section id="resume" className="resume">
        <PageContainer 
        HeaderText="My Resume" 
        icon={<BsInfoCircleFill color="#50ceb1" size={40}/>}
        />

        </section>
    )
}
export default resume;