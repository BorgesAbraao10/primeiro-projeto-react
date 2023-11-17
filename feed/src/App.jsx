import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Abraão Borges"
        content="Sou um estudante de programação apaixonado por criar soluções para problemas complexos usando tecnologia."
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
