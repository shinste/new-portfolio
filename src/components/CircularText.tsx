const CircularText = () => {
  return (
    <div className="absolute w-[850px] h-[850px]">
      <svg viewBox="0 0 700 700" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="
          M 350, 350
          m -300, 0
          a 300,300 0 1,1 600,0
          a 300,300 0 1,1 -600,0
        "
          />
        </defs>
        <g className="rotate-around">
          <text fill="#FFFFFF" fontSize="26" fontFamily="monospace">
            <textPath href="#circlePath" startOffset="0%">
              Frontend Developer • React + Next.js • AI Integration •
              Performance Optimization • Mobile and Web Development • Responsive
              Design •
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default CircularText;
