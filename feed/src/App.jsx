import { Post } from "./Post";
import { Header } from "./components/header";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
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
