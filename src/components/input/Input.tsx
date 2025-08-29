// Importa os estilos específicos do componente Input
import style from "./Input.module.css";

/**
 * Interface para as propriedades aceitas pelo componente Input
 */
interface InputProps {
  value?: string; // Valor atual do input (controlado pelo estado no componente pai)
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função chamada ao alterar o texto
  onkeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // Função chamada ao pressionar uma tecla
  onInvalid?: (e: React.InvalidEvent<HTMLInputElement>) => void; // Função chamada quando o input é inválido
}

/**
 * Componente Input responsável por renderizar um campo de texto
 * Ele é controlado pelo componente pai (recebe props para eventos e valor)
 */
export function Input({ value, onchange, onkeydown, onInvalid }: InputProps) {
  return (
    <input
      className={style.input} // Classe CSS para estilização
      type="text" // Define o tipo do input como texto
      placeholder="Adicione uma nova tarefa" // Texto exibido quando o campo está vazio
      value={value} // Define o valor atual do input
      onChange={onchange} // Dispara a função passada pelo pai quando o valor é alterado
      onKeyDown={onkeydown} // Dispara a função quando qualquer tecla é pressionada (ex.: Enter para criar tarefa)
      onInvalid={onInvalid} // Dispara a função se o campo for inválido (usado para validação)
    />
  );
}
