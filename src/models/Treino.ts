import Exercicios from "./Exercicios";
import Usuario from "./Usuario";

export default interface Treino {
  imagemUrl: string;
  id: number;
  nomeTreino: string;
  frequenciaSemanal: number;
  descricao: string;
  exercicios: Exercicios | null;
  usuario: Usuario | null;
}
