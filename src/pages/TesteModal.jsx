import { useState } from "react";
import UploadCnhModal from "../components/UploadCnhModal";

export default function TesteModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir Modal</button>

      <UploadCnhModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}