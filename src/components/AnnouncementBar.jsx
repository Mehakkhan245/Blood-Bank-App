function AnnouncementBar({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-[#C1121F] text-white flex items-center overflow-hidden z-50">

    <div className="flex-1 overflow-hidden whitespace-nowrap">
       <div className="scroll-text">
          ❤️ Every Drop Counts — Donate Blood, Save Lives. Your One Donation Can Give Someone a Second Chance.
        </div>
      </div>

      <button
        onClick={onClose}
        className="px-4 text-xl"
      >
        ✕
      </button>

    </div>
  );
}

export default AnnouncementBar;