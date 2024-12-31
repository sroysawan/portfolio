import { useState } from "react";
import { motion } from "framer-motion"; // เพิ่ม import

const Picture = ({ picture, title }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  if (!picture) return null;

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  const handleMouseMove = (e) => {
    setTooltipPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="relative">
      <motion.img
        src={picture}
        alt={title}
        className="w-5/6 rounded-md border-2 border-primarySubcontent cursor-pointer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }} // ทำให้ทำงานทุกครั้งที่เลื่อนกลับมา
      />
      {isHovered && (
        <div
          className="fixed bg-gray-400 text-gray-600 text-sm px-2 py-1 rounded-md pointer-events-none"
          style={{
            top: `${tooltipPosition.y + 20}px`,
            left: `${tooltipPosition.x + 10}px`,
          }}
        >
          คลิกเพื่อดูรูปเต็ม
        </div>
      )}
      {isClicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={picture}
            alt={title}
            className="max-w-full max-h-full rounded-md p-4"
          />
        </div>
      )}
    </div>
  );
};

export default Picture;
