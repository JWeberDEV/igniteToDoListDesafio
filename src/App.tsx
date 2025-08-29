// Importação dos estilos globais
import "./css/global.css";
// Importação dos estilos específicos do componente App
import styles from "./App.module.css";

// Importação dos componentes reutilizáveis
import { Header } from "./components/header/Header";
import { Input } from "./components/input/Input";
import { Button } from "./components/button/Button";
import { Tasks, type Task } from "./components/tasks/Tasks";

// Ícone para exibição quando não houver tarefas
import { FaClipboardList } from "react-icons/fa";

// Hooks do React
import { useEffect, useState } from "react";

// Lista inicial de tarefas (vazia)
const tasks: Task[] = [];

function App() {
  // Estado para armazenar a lista de tarefas
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  // Estado para controlar o valor digitado no input
  const [newTaskContent, setNewTaskContent] = useState<string>("");

  // Estado para armazenar o total de tarefas concluídas
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  /**
   * useEffect para atualizar a contagem de tarefas concluídas
   * Sempre que a lista de tarefas mudar, conta quantas estão com status "completed"
   */
  useEffect(() => {
    if (taskList.length > 0) {
      let count: number = 0;
      // Percorre todas as tarefas e incrementa se estiverem concluídas
      taskList.forEach((element) => {
        if (element.status === "completed") {
          count += 1;
        }
      });
      // Atualiza o estado de tarefas concluídas
      setCompletedTasks(count);
    }
  }, [taskList]); // Executa sempre que taskList for alterada

  /**
   * Função para criar uma nova tarefa
   * - Impede criação se o input estiver vazio
   * - Cria um objeto de tarefa com ID incremental
   * - Adiciona a nova tarefa à lista e limpa o input
   */
  const handleCreateNewTask = () => {
    if (newTaskContent.trim() === "") return; // Validação para não criar tarefa vazia

    const newTask: Task = {
      id: taskList.length + 1, // Gera um ID simples baseado no tamanho da lista
      content: newTaskContent, // Conteúdo vindo do input
      status: "Uncompleted", // Tarefa começa como não concluída
    };

    setTaskList([...taskList, newTask]); // Atualiza a lista com a nova tarefa
    setNewTaskContent(""); // Limpa o input
  };

  /**
   * Função para alternar o status de uma tarefa entre "Uncompleted" e "completed"
   * Recebe o ID da tarefa e atualiza o status correspondente
   */
  const setTaskStatus = (id: number) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Uncompleted" ? "completed" : "Uncompleted",
            }
          : task
      )
    );
  };

  /**
   * Função para deletar uma tarefa pelo ID
   * - Filtra a lista removendo a tarefa com o ID informado
   */
  const deleteTask = (id: number) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
  };

  /**
   * Captura a tecla pressionada no input
   * - Se for "Enter", chama a função para criar uma nova tarefa
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateNewTask();
    }
  };

  /**
   * Validação para o input
   * - Define uma mensagem personalizada caso o campo esteja vazio
   */
  const handleNewCommentInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity("O campo está vazio!");
    e.currentTarget.setCustomValidity(""); // Limpa a mensagem após
  };

  return (
    <main>
      {/* Cabeçalho do app */}
      <Header />

      <div className={styles.container}>
        {/* Linha com input e botão */}
        <div className={styles.row}>
          <Input
            value={newTaskContent} // Valor atual do input
            onchange={(e) => setNewTaskContent(e.target.value)} // Atualiza estado ao digitar
            onkeydown={(e) => handleKeyPress(e)} // Adiciona tarefa ao pressionar Enter
            onInvalid={(e) => handleNewCommentInvalid(e)} // Mensagem customizada para input inválido
          />
          <Button onClick={handleCreateNewTask} /> {/* Botão para adicionar tarefa */}
        </div>

        {/* Estatísticas das tarefas */}
        <div className={styles.tasks}>
          <strong className={styles.createdTasks}>
            Tarefas criadas <span>{taskList.length}</span>
          </strong>
          <strong className={styles.completedTasks}>
            Concluídas{" "}
            <span>
              {completedTasks} de {taskList.length}
            </span>
          </strong>
        </div>

        {/* Linha divisória */}
        <div className={styles.divider}></div>

        {/* Lista de tarefas */}
        <Tasks
          tasks={taskList} // Passa a lista de tarefas
          onSetTaskStatus={setTaskStatus} // Função para alterar status
          onDeleteTask={deleteTask} // Função para deletar tarefa
        />

        {/* Mensagem exibida quando não há tarefas */}
        {taskList.length === 0 && (
          <div className={styles.notasks}>
            <strong>
              <FaClipboardList size={56} />
            </strong>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
