import Header from "../component/Header";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 left-0 w-full h-full object-cover"
        >
          <source src="public/yetkinlik.mp4" type="video/mp4" />
          <source src="public/yetkinlik.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default About;
