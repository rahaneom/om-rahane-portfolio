import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Howl } from "howler";
import SoundBar from "./SoundBar/SoundBar";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = ({ children }) => {
  const inputRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (e.target.checked) multiPop.play();
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && inputRef.current?.checked) {
      inputRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <nav className="fixed top-0 z-50 w-full py-8 transition-all duration-300 select-none bg-gradient-to-b from-black shadow-black">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Om Rahane"
            width={120}
            height={120}
          />
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <SoundBar />
          <input
            ref={inputRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="absolute top-0 right-0 w-6 h-6 opacity-0 checkbox-toggle link"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="flex items-center justify-center w-6 h-6 hamburger">
            <div className="relative flex items-center justify-center flex-none w-full duration-300 bg-white" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
