"use client";

interface props {
  flat: () => void;
  house: () => void;
  pg: () => void;
}

const Categories: React.FC<props> = ({ flat, house, pg }) => {
  return (
    <div className="md:h-42 mt-1 flex h-24 w-full items-center justify-evenly md:w-2/3">
      <div className="flex flex-col items-center" onClick={flat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="60px"
          viewBox="0 -960 960 960"
          width="60px"
          fill="#1e3a8a"
        >
          <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
        </svg>
        <p>Flats</p>
      </div>
      <div className="flex flex-col items-center" onClick={house}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="60px"
          viewBox="0 -960 960 960"
          width="60px"
          fill="#1e3a8a"
        >
          <path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z" />
        </svg>
        <p>Houses</p>
      </div>
      <div className="flex flex-col items-center" onClick={pg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="60px"
          viewBox="0 -960 960 960"
          width="60px"
          fill="#1e3a8a"
        >
          <path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
        </svg>
        <p>PG</p>
      </div>
    </div>
  );
};

export default Categories;
