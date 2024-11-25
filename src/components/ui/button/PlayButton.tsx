import "./PlayButton.css";

interface PlayButtonProps {
  onPlayTrailer: () => void;
}

export default function PlayButton({ onPlayTrailer }: PlayButtonProps) {
  return (
    <button onClick={onPlayTrailer} className="play-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Play icon"
      >
        <path fill="currentColor" d="M3 22v-20l18 10-18 10z" />
      </svg>
      Ver trailer
    </button>
  );
}
