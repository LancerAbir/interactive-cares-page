import CategoryArea from "../src/components/Home/CategoryArea";
import CoursesArea from "../src/components/Home/CoursesArea";
import FeedbackArea from "../src/components/Home/FeedbackArea";
import HeaderHero from "../src/components/Home/HeaderHero";
import InstructorsArea from "../src/components/Home/InstructorsArea";
import SubscribeArea from "../src/components/Home/SubscribeArea";
import WebDevelopmentArea from "../src/components/Home/WebDevelopmentArea";
import Footer from "../src/layout/Footer/Footer";
import Header from "../src/layout/Header/Header";

const index = () => {
    return (
        <>
            {/*====== Header Template Start ======*/}
            <Header />
            {/*====== Header Template End ======*/}

            {/*====== Header Hero Area Start ======*/}
            <HeaderHero />
            {/*====== Header Hero Area End ======*/}

            {/*====== Category Area Start ======*/}
            <CategoryArea />
            {/*====== Category Area End ======*/}

            {/*====== Web Development Area Start ======*/}
            <WebDevelopmentArea />
            {/*====== Web Development Area End ======*/}

            {/*====== Courses Area Start ======*/}
            <CoursesArea />
            {/*====== Courses Area End ======*/}

            {/*====== Instructors Area Start ======*/}
            <InstructorsArea />
            {/*====== Instructors Area End ======*/}

            {/*====== Student Feedback Area Start ======*/}
            <FeedbackArea />
            {/*====== Student Feedback Area End ======*/}

            {/*====== Subscribe Area Start ======*/}
            <SubscribeArea />
            {/*====== Subscribe Area End ======*/}

            {/*====== Footer Template Start ======*/}
            <Footer />
            {/*====== Footer Template End ======*/}
        </>
    );
};

export default index;
