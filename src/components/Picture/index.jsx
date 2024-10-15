import { useState } from "react";

const Picture = ({picture,title}) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // เพิ่ม state สำหรับการ hover
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  if(!picture)
    return null

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };
  const handleMouseMove = (e) => {
    // อัปเดตตำแหน่งของ tooltip ตามตำแหน่งของ cursor
    setTooltipPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
<div className="relative">
      <img
        src={picture}
        alt={title}
        className="w-5/6 rounded-md border-2 border-primarySubcontent cursor-pointer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}  // เริ่ม hover
        onMouseLeave={() => setIsHovered(false)} // จบ hover
        onMouseMove={handleMouseMove}
      />
{/* แสดง tooltip ที่ตามตำแหน่ง cursor */}
{isHovered && (
        <div
          className="fixed bg-gray-400 text-gray-600 text-sm px-2 py-1 rounded-md pointer-events-none"
          style={{
            top: `${tooltipPosition.y + 20}px`, // แสดงต่ำกว่า cursor 20px
            left: `${tooltipPosition.x + 10}px`, // แสดงห่างจาก cursor 10px
          }}
        >
          คลิกเพื่อดูรูปเต็ม
        </div>
      )}
      {/* ภาพแบบเต็มจอเมื่อคลิก */}
      {isClicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={picture}
            alt={title}
            className="max-w-full max-h-full rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Picture;
