import { IHabilidade } from "../../habilidade/model/habilidade.model";
import { IVantagem } from "../../vantagem/model/vantagem.model";

export interface IPokemon {
    id: number;
    nome: string;
    tipoPokemon: string;
    habilidade?: IHabilidade;
    vantagem?: IVantagem;

}