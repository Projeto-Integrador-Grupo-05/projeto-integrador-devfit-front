import Exercicios from "./Exercicios";
import Usuario from "./Usuario";

export default interface Treino {
  id: number;
  nomeTreino: string;
  frequenciaSemanal: number;
  descricao: string;
  exercicios: Exercicios | null;
  usuario: Usuario | null;
}
