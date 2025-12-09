import Josh from "../assets/Josh.png";
const About = () => {
  return (
    <>
      <div className="text">
        <h1 className="text-3xl font-bold mb-6 text-center">About</h1>I am a
        student interested in Computer Science, a love that has grown through
        social media and Robotics. I am determined to learn more about software
        development and work with others to enhance my programming skills. My
        goal is to connect people of all cultures through programming to create
        things that will better society
      </div>
      <div className="pic_container">
        <img src={Josh} alt="My picture" className="pic" />
      </div>
    </>
  );
};

export default About;
