// Importação do arquivo de estilos CSS modular
import style from "./Tasks.module.css";

// Importação dos ícones usados no componente
import { FaRegTrashAlt } from "react-icons/fa"; // Ícone de lixeira para deletar tarefa
import { LiaCircle } from "react-icons/lia"; // Ícone de círculo para tarefas não concluídas
import { CiCircleCheck } from "react-icons/ci"; // Ícone de check para tarefas concluídas

/**
 * Interface que define a estrutura de uma Tarefa
 */
export interface Task {
  id: number; // Identificador único da tarefa
  content: string; // Texto descritivo da tarefa
  status: "completed" | "Uncompleted"; // Status da tarefa (concluída ou não)
}

/**
 * Interface para as props do componente Tasks
 */
interface TasksProps {
  tasks: Task[]; // Lista de tarefas
  onSetTaskStatus: (id: number) => void; // Função para alternar status da tarefa
  onDeleteTask: (id: number) => void; // Função para deletar tarefa
}

/**
 * Componente responsável por exibir a lista de tarefas
 * @param tasks Lista de tarefas
 * @param onSetTaskStatus Função para alternar status (completa / não completa)
 * @param onDeleteTask Função para remover tarefa
 */
export function Tasks({ tasks, onSetTaskStatus, onDeleteTask }: TasksProps) {
  /**
   * Função intermediária para alterar status da tarefa
   * Chama a função recebida via props
   */
  const handleSetTaskStatus = (id: number) => {
    onSetTaskStatus(id);
  };

  /**
   * Função intermediária para deletar tarefa
   * Chama a função recebida via props
   */
  const handleDeleteTask = (id: number) => {
    onDeleteTask(id);
  };

  return (
    <div className={style.tasks}>
      {/* Percorre a lista de tarefas e renderiza cada uma */}
      {tasks.map((task) => (
        <div key={task.id} className={style.task}>
          {/* Verifica o status da tarefa para exibir o ícone correspondente */}
          {task.status === "completed" ? (
            // Se estiver concluída, exibe ícone de check
            <CiCircleCheck
              size={26}
              className={style.check}
              onClick={() => handleSetTaskStatus(task.id)} // Clique alterna status
            />
          ) : (
            // Se não estiver concluída, exibe círculo vazio
            <LiaCircle
              size={26}
              className={style.circle}
              onClick={() => handleSetTaskStatus(task.id)} // Clique alterna status
            />
          )}

          {/* Texto da tarefa */}
          <span className={task.status === "completed" ? style.completed : ""}>
            {task.content}
          </span>

          {/* Botão para excluir tarefa */}
          <button
            className={style.delete}
            onClick={() => handleDeleteTask(task.id)}
          >
            <FaRegTrashAlt size={20} /> {/* Ícone da lixeira */}
          </button>
        </div>
      ))}
    </div>
  );
}
