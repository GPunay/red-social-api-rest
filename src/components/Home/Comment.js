import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

function Comment({ comment, postId, add }) {
  const { user } = useAuth();
  const [text, setText] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    // Aquí deberías hacer la petición a tu backend para agregar el comentario
    toast.success("Comentario agregado (simulado)");
    setText("");
  };

  if (add) {
    return (
      <form onSubmit={handleAdd}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Escribe un comentario..."
          required
        />
        <button type="submit">Comentar</button>
      </form>
    );
  }

  return (
    <div className="comment">
      <strong>{comment.author?.nick || "Usuario"}</strong>: {comment.text}
    </div>
  );
}

export default Comment;