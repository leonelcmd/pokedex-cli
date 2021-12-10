import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHabilidade } from '../model/habilidade.model';

@Component({
  selector: 'app-hablidade-form',
  templateUrl: './hablidade-form.component.html',
  styleUrls: ['./hablidade-form.component.css']
})
export class HabilidadeFormComponent implements OnInit {

  constructor() {}
  @Input()
  habilidade = {} as IHabilidade;

  @Output()
  private salvarHabilidadeEventPublisher = new EventEmitter<IHabilidade>();

  ngOnInit(): void {

  }

  salvar() {
    this.salvarHabilidadeEventPublisher.emit(this.habilidade);
  }

  disable() {
    return !this.habilidade.descricao || this.habilidade.descricao.length > 45;
  }

}
