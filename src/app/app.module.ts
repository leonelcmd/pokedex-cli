
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HabilidadeModule } from './modules/habilidade/habilidade.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { VantagemModule } from './modules/vantagem/vantagem.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonModule,
    HabilidadeModule,
    VantagemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
