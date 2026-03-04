import { useState } from "react";
import axios from "axios";
import "../styles/uploadmodal.css";

export default function UploadCnh() {
  const [arquivo, setArquivo] = useState(null);
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [mensagemConta, setMensagemConta] = useState("");
  const [loading, setLoading] = useState(false);

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
          headers: { "Content-Type": "multipart/form-data" }
        }
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
    <div className="upload-container">
      <h2 className="upload-title">Envio da CNH</h2>

      <div className="file-wrapper">
        <input
          type="file"
          onChange={(e) => setArquivo(e.target.files[0])}
        />
      </div>

      <button
        className="modal-button"
        onClick={enviarArquivo}
        disabled={loading}
      >
        {loading ? "Processando..." : "Enviar"}
      </button>

      {mensagemValidacao && (
        <p className="msg-validacao">
          {mensagemValidacao}
        </p>
      )}

      {mensagemConta && (
        <p className="msg-conta">
          {mensagemConta}
        </p>
      )}
    </div>
  );
}