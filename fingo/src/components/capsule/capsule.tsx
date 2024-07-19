import "./capsule.css";

interface CapsuleProps {
  text: string;
  variant: "small" | "medium" | "large";
}

export default function Capsule({ text, variant }: CapsuleProps) {
  return (
    <div className={`capsule ${variant}`}>
      {text}
    </div>
  );
}
