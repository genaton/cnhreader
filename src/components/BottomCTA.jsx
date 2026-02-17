// import { useNavigate } from "react-router-dom";

// export default function CTA() {
export default function BottomCTA({ onOpenModal }) {
  // const navigate = useNavigate();

  return (
    // <div className="-cta">
    //   <span>Ainda não é cliente BB?</span>
    //   <button onClick={() => navigate("/abrir-conta")}>
    //     ABRA SUA CONTA
    //   </button>
    // </div>
     <div className="bottom-cta">
      <span>Ainda não é cliente BB?</span>
      <button onClick={onOpenModal}>ABRA SUA CONTA</button>
    </div>

  );
}