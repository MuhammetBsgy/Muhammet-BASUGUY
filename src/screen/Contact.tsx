import Header from "../component/Header";

const Contact = () => {
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
          <source src="public/contact.mp4" type="video/mp4" />
          <source src="public/contact.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Contact;
