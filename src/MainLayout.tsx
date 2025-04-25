import Header from "./component/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 left-0 w-full h-full object-cover"
        >
          <source src="/public/mainVideo1.mp4" type="video/mp4" />
        </video>
      </div>
      <Header />
      <main className="flex-grow p-4 md:p-8 mt-8 flex flex-col">
        <Outlet />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HOŞ GELDİNİZ
              </span>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
