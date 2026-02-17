import logo from "../assets/img/logoBBAzulClaro.png";
export default function Header() {
  return (
    <header className="header">
      <div className="left-group">
      <div className="menu-icon">☰</div>
        <img src={logo} alt="Logo BB" className="logo"></img>
      </div>

      <div className="menu">
        <span>Pra Você</span>
        <span>Pro Seu Negócio</span>
        <span>Agronegócios</span>
        <span>Setor Público</span>
      </div>

      <div className="login">
        
        <span className="icon">🔍︎</span> 
        <span className="text">ACESSE SUA CONTA</span>
        
        
        
      </div>
    </header>
  );
}
