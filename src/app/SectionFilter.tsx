import { Tag } from "antd";
import { BsPersonArmsUp, BsFillTrainLightrailFrontFill } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { LiaShareAltSolid } from "react-icons/lia";
import { LuRadioTower, LuMicVocal } from "react-icons/lu";

const services = [
  { title: "Image", desc: "Generate images with custom styles", icon: <FaRegImage />, gradient: "from-sky-500 to-indigo-500" },
  { title: "Video", desc: "Create generative videos", icon: <IoVideocam />, gradient: "from-yellow-400 to-orange-500" },
  { title: "Realtime", desc: "AI rendering on a canvas", icon: <LiaShareAltSolid />, gradient: "from-cyan-400 to-blue-500" },
  { title: "Enhancer", desc: "Upscale and enhance images", icon: <FaPenRuler />, gradient: "from-gray-600 to-black" },
  { title: "Edit", desc: "Edit and enhance generated images", icon: <LuRadioTower />, gradient: "from-purple-500 to-pink-500" },
  { title: "Video LipSync", desc: "Sync any video to audio", icon: <LuMicVocal />, gradient: "from-blue-500 to-sky-500" },
  { title: "Motion Transfer", desc: "Transfer motion to static images", icon: <BsPersonArmsUp />, gradient: "from-green-500 to-emerald-600" },
  { title: "Train", desc: "Train AI to recognize styles", icon: <BsFillTrainLightrailFrontFill />, gradient: "from-orange-400 to-red-500" },
];

export default function SectionFilter() {
  return (
    <section className="px-6 py-10 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Generate
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex space-x-2 items-start py-2 px-3 rounded-xl border-[#D9DADC] hover:border-[1.3px] dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:shadow-md transition"
          >
            <span
              className={`text-md mt-1 px-2 py-2 rounded-md text-white bg-gradient-to-t ${s.gradient}`}
            >
              {s.icon}
            </span>
            <div className="leading-4">
              <h3 className="font-medium mt-2 text-gray-900 dark:text-gray-100">
                {s.title}
              </h3>
              <p className="text-[11px] text-gray-600 dark:text-gray-400">
                {s.desc}
              </p>
            </div>
            <Tag className="tag bg-[#f8f8f8] self-center">Open</Tag>
          </div>
        ))}
      </div>
    </section>
  );
}
