// Importa os estilos específicos do componente Header
import styles from "./Header.module.css";

// Importa a imagem do logo que será exibida no cabeçalho
import logo from "../../assets/img/logo.png";

/**
 * Componente Header responsável por renderizar o cabeçalho da aplicação
 * - Contém apenas o logotipo dentro de uma tag <header>
 */
export function Header() {
  return (
    <>
      {/* Elemento de cabeçalho estilizado */}
      <header className={styles.header}>
        {/* Exibe a imagem do logo */}
        <img src={logo} alt="Logo da aplicação" />
      </header>
    </>
  );
}
