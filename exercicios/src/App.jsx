import { useState } from "react";

// 6. Componente Cartao
function Cartao({ titulo, descricao }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

// 7. Componente Aviso
function Aviso({ urgente }) {
  return (
    <div>
      {urgente ? <p>ATENÇÃO: leia agora!</p> : <p>Aviso comum</p>}
    </div>
  );
}

// 8. Componente Curtidas
function Curtidas() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <div>
      <p>{curtidas} curtidas</p>
      <button onClick={() => setCurtidas(curtidas + 1)}>Curtir</button>
      {curtidas > 10 && <p>Post popular!</p>}
    </div>
  );
}

// 9. Componente MostrarSenha
function MostrarSenha() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Esconder" : "Mostrar"}
      </button>
      {visivel && <p>Senha: 1234</p>}
    </div>
  );
}

// 10. Componente ListaTarefas (versão simples sem desafio)
function ListaTarefas() {
  const tarefas = [
    { id: 1, texto: "Estudar React", feita: false },
    { id: 2, texto: "Lavar a louça", feita: true },
    { id: 3, texto: "Fazer a atividade", feita: false },
  ];

  return (
    <ul>
      {tarefas
        .filter((tarefa) => !tarefa.feita)
        .map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
    </ul>
  );
}

// 10 (DESAFIO). Componente ListaTarefas com useState e botão de concluir
function ListaTarefasDesafio() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false },
    { id: 2, texto: "Lavar a louça", feita: true },
    { id: 3, texto: "Fazer a atividade", feita: false },
  ]);

  const concluirTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, feita: true } : tarefa
      )
    );
  };

  return (
    <ul>
      {tarefas
        .filter((tarefa) => !tarefa.feita)
        .map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}{" "}
            <button onClick={() => concluirTarefa(tarefa.id)}>Concluir</button>
          </li>
        ))}
    </ul>
  );
}

// Componente principal App juntando tudo
export default function App() {
  return (
    <div>
      <h2>Exercício 6</h2>
      <Cartao titulo="React" descricao="Biblioteca para criar interfaces." />
      <Cartao titulo="Props" descricao="Passando dados entre componentes." />
      <Cartao titulo="State" descricao="Gerenciando estados na tela." />

      <hr />
      <h2>Exercício 7</h2>
      <Aviso urgente={true} />
      <Aviso urgente={false} />

      <hr />
      <h2>Exercício 8</h2>
      <Curtidas />

      <hr />
      <h2>Exercício 9</h2>
      <MostrarSenha />

      <hr />
      <h2>Exercício 10</h2>
      <ListaTarefas />

      <hr />
      <h2>Exercício 10 (Desafio)</h2>
      <ListaTarefasDesafio />
    </div>
  );
}