import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const About = () => {
    return (
        <main className="container">
            <section className="main-section">
                <h2 className="title">About Me</h2>
                <p className="content">
                    I’m a passionate Frontend Developer with a strong focus on crafting
                    intuitive, responsive, and visually engaging user interfaces.
                    I specialize in React.js and modern JavaScript (ES6+),
                    transforming complex ideas into clean, maintainable code and
                    seamless digital experiences. My approach combines technical precision
                    with a keen eye for design and user experience.
                </p>
                <p className="content">
                    With a solid foundation in HTML5, CSS3, and React ecosystem tools
                    like Redux and React Router, I enjoy building scalable web applications
                    that balance functionality with aesthetics. I’m skilled at translating
                    wireframes and design concepts into dynamic, performant components that
                    enhance user engagement and usability.
                </p>
                <p className="content">
                    Beyond technical implementation, I value collaboration, adaptability,
                    and attention to detail. I work closely with designers, backend
                    developers, and stakeholders to ensure every project meets both
                    business goals and user needs. I’m always exploring new frontend
                    technologies, optimizing performance, and writing clean, modular code
                    to improve scalability
                </p>
                <p className="content">
                    I take pride in my ability to learn quickly, embrace challenges,
                    and continuously grow as a developer. Whether it’s implementing new
                    UI features, integrating APIs, or improving accessibility, I strive
                    to deliver polished solutions that leave a lasting impact
                </p>

            </section>
            <section className="skills-section">
                    <BiLogoHtml5 className="skill-icon" />
                    <BiLogoCss3 className="skill-icon" />
                    <BiLogoJavascript className="skill-icon" />
                    <BiLogoTypescript className="skill-icon" />
                    <FaReact className="skill-icon" />
                    <BiLogoRedux className="skill-icon" />
                    <SiMui className="skill-icon" />
            </section>
        </main>

    );
};

export default About;
