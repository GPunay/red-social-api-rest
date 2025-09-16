import React from "react";

function Post({ post }) {
  return (
    <div className="post">
      {/* Autor */}
      <div className="post-author">@{post.author.nick}</div>

      {/* Contenido */}
      <div className="post-content">{post.content}</div>

      {/* Acciones */}
      <div className="post-actions">
        <button>👍 Me gusta ({post.likes.length})</button>
        <button>💬 Comentar ({post.comments.length})</button>
      </div>

      {/* Sección de comentarios (si quieres mostrar algunos) */}
      {post.comments.length > 0 && (
        <div className="post-comments">
          {post.comments.map((c, i) => (
            <p key={i}>
              <strong>@{c.author}</strong>: {c.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;