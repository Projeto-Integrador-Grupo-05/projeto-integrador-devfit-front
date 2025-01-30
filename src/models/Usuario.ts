import Treino from "./Treino";

export default interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  altura: number;
  peso: number;
  objetivo: string;
  tipo?: string;
  nivelFitness: string;
  treino?: Treino | null;
}
