import { IPokemon } from "../../pokemon/model/pokemon.model";

export interface IVantagem {
    id?: number;
    pokemon: IPokemon;
    tipoPokemon: string; 
    pro: boolean;
    imune: boolean;
    
}