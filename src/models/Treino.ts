import Exercicios from "./Exercicios";

export default interface Treino {
  id: number;
  nomeTreino: string;
  frequenciaSemanal: number;
  descricao: string;
  exercicios: Exercicios | null;
}
