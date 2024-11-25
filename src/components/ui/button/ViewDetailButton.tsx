import "./DetailButton.css";

interface ViewButtonProps {
  onViewDetail: () => void;
}

export default function ViewDetailButton({ onViewDetail }: ViewButtonProps) {
  return (
    <button onClick={onViewDetail} className="detail-button">
      Detalle
    </button>
  );
}
