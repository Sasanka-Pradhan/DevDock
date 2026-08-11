import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaRocket,
  FaCode,
  FaSyncAlt,
  FaLightbulb,
} from "react-icons/fa";
import abLogo from "../images/AboutLogo.png";



const features = [
  {
    icon: <FaRocket className="text-[#7E4BDE] text-2xl" />,
    title: "Fast & Real-Time",
    desc: "Collaborate instantly with your team from anywhere.",
  },
  {
    icon: <FaCode className="text-[#7E4BDE] text-2xl" />,
    title: "Multi-Language Support",
    desc: "Write and run code in JavaScript, Python, C, Java, and more.",
  },
  {
    icon: <FaSyncAlt className="text-[#7E4BDE] text-2xl" />,
    title: "Live Sync",
    desc: "Changes reflect in real-time across all users.",
  },
  {
    icon: <FaLightbulb className="text-[#7E4BDE] text-2xl" />,
    title: "Clean UI",
    desc: "A distraction-free, elegant interface for focused development.",
  },
];



const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1e1f38] text-white py-20 px-6 flex flex-col items-center relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 top-6 text-white hover:text-[#7E4BDE] transition"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Main Info Card with Logo */}
      <div className="relative bg-[#2b2d4a] w-full max-w-4xl rounded-2xl shadow-2xl px-10 pt-20 pb-14 text-center mb-20">
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg">
            <img
              src={abLogo}
              alt="DevDock Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#fff] mb-6">About DevDock</h1>
        <p className="text-[#dde2fa] max-w-xl mx-auto">
          DevDock is a collaborative coding platform built for developers who
          love to code together. Whether it's team projects, debugging,
          learning, or building side-by-side, DevDock makes it smooth and
          seamless.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] max-w-6xl w-full mb-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#2b2d4a] p-6 rounded-xl text-center shadow-md hover:shadow-[0_4px_20px_rgba(126,75,222,0.4)] transition duration-300"
          >
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#c5b2ff] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#dde2fa]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
