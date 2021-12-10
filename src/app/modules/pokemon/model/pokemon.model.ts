import { HabilidadeModule } from "../../habilidade/habilidade.module";
import { VantagemModule } from "../../vantagem/vantagem.module";

export interface InputPokemon {
    id: number;
    nome: string;
    descrcicao: string;
    habilidade: HabilidadeModule;
    vantagem: VantagemModule;
}