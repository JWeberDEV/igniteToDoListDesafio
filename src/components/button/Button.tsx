// Importa os estilos específicos para o botão
import styles from "./Button.module.css";

// Importa o ícone que será exibido ao lado do texto do botão
import { CiCirclePlus } from "react-icons/ci";

// Importa o tipo para herdar atributos padrão do elemento <button>
import type { ButtonHTMLAttributes } from "react";

/**
 * Interface para as propriedades do componente Button
 * - Estende os atributos padrão do elemento <button> do HTML
 * - Adiciona uma prop obrigatória onClick (função executada ao clicar)
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void; // Função chamada quando o botão é clicado
}

/**
 * Componente Button responsável por renderizar um botão estilizado
 * - Exibe um texto ("Criar") e um ícone (CiCirclePlus)
 * - Permite passar atributos padrão de <button> via ...props
 */
export function Button({ onClick, ...props }: ButtonProps) {
  return (
    <button
      className={styles.button} // Aplica o estilo do botão
      onClick={onClick} // Função de clique passada como prop obrigatória
      {...props} // Espalha outros atributos recebidos (ex.: disabled, type)
    >
      Criar {/* Texto do botão */}
      <CiCirclePlus size={26} className={styles.icon} /> {/* Ícone ao lado do texto */}
    </button>
  );
}
