import {BsInfoCircleFill} from 'react-icons/bs';
import PageContainer from "../../Components/PageHeaderContainer";
const Contact=()=>{
    return (
        <section id="contact" className="contact">
        <PageContainer 
        HeaderText="My Contact" 
        icon={<BsInfoCircleFill color="#50ceb1" size={40}/>}
        />

        </section>
    )
}
export default Contact;