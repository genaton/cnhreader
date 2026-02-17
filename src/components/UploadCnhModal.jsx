import { useState, useRef } from "react";
import axios from "axios";
import "../styles/uploadCnhModal.css";

export default function UploadCnhModal({ open, onClose }) {
  const [arquivo, setArquivo] = useState(null);
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [mensagemConta, setMensagemConta] = useState("");
  const [loading, setLoading] = useState(false);

  const dropRef = useRef(null);

  if (!open) return null;
  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add("drag-over");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropRef.current.classList.remove("drag-over");

    const file = e.dataTransfer.files[0];
    if (file) setArquivo(file);
  };

  const enviarArquivo = async () => {
    if (!arquivo) return;

    setLoading(true);
    setMensagemValidacao("");
    setMensagemConta("");

    const formData = new FormData();
    formData.append("arquivo", arquivo);

    try {
      const response = await axios.post(
        "http://localhost:8080/ocr/cnh",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      setMensagemValidacao(response.data.mensagemValidacao);
      setMensagemConta(response.data.mensagemConta);
    } catch (error) {
      console.error(error);
      setMensagemValidacao("Erro ao processar documento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>

        <h2>Envie sua CNH</h2>

        <div
          ref={dropRef}
          className="drop-area"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {arquivo ? (
            <p>Arquivo selecionado: {arquivo.name}</p>
          ) : (
            <p>Arraste sua CNH aqui ou clique abaixo</p>
          )}
        </div>

        <input type="file" onChange={(e) => setArquivo(e.target.files[0])} />

        <button className="enviar" onClick={enviarArquivo} disabled={loading}>
          {loading ? "Processando..." : "Enviar"}
        </button>

        {mensagemValidacao && (
          <p className="msg-validacao">{mensagemValidacao}</p>
        )}

        {mensagemConta && <p className="msg-conta">{mensagemConta}</p>}
      </div>
    </div>
  );
}
