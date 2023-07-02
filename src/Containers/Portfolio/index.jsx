import {BsInfoCircleFill} from 'react-icons/bs';
import PageContainer from "../../Components/PageHeaderContainer";
const Portfolio=()=>{
    return (
        <section id="portfolio" className="portfolio">
        <PageContainer 
        HeaderText="My Portfolio" 
        icon={<BsInfoCircleFill color="#50ceb1" size={40}/>}
        />

        </section>
    )
}
export default Portfolio;