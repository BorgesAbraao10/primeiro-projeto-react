import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Abraão Borges"
        content="Sou um estudante de programação apaixonado por criar soluções para problemas complexos usando tecnologia."
      />
      <Post
        author="Albert Einsten"
        content="Diante de Deus todos somos igualmente sábios e igualmente tolos."
      />
    </div>
  );
}
