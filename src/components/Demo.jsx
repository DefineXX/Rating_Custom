const Demo = () => {
  return (
    <svg width="512" height="702" viewBox="0 0 512 702">
      <clipPath id="clippath">
        <circle cx="150" cy="150" r="150" stroke="black" strokeWidth="2" />
      </clipPath>

      <text
        clipPath="url(#clippath)"
        fontSize="100"
        fontFamily="Arial"
        fontWeight="bold"
        x="0"
        y="250"
      >
        AOA 2018
      </text>

      <text
        opacity="0.1"
        fontSize="100"
        fontFamily="Arial"
        fontWeight="bold"
        x="0"
        y="250"
      >
        AOA 2018
      </text>
    </svg>
  );
};

export default Demo;
