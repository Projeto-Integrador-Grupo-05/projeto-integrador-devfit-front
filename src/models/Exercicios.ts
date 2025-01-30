import Treino from "./Treino";

export default interface Exercicios {
  id: number;
  nome: string;
  descricao: string;
  grupoMuscular: string;
  nivelDificuldade: string;
  tempoEstimado: number;
  treino?: Treino | null;
}
