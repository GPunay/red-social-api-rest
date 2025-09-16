import { useEffect, useState } from "react";
import { api } from "../../api";
import Post from "./Post";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Aquí deberías cargar publicaciones desde tu API cuando la implementes
    // Ejemplo estático:
    setPosts([
      {
        _id: "1",
        author: { nick: "usuario1" },
        content: "¡Hola mundo!",
        likes: [],
        comments: []
      }
    ]);
  }, [token]);

  return (
    <div className="home-container">
      <h2>Publicaciones recientes</h2>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Home;