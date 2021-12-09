import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-hablidade-form',
  templateUrl: './hablidade-form.component.html',
  styleUrls: ['./hablidade-form.component.css']
})
export class HablidadeFormComponent implements OnInit {

  constructor() {}
  @Input()
  habilidade = {} as InputHabilidade;

  @Output()
  private salvarHabilidadeEventPublisher = new EventEmitter<InputHabilidade>();

  ngOnInit(): void {

  }

  salvar() {
    this.salvarHabilidadeEventPublisher.emit(this.habilidade);
  }

  disable() {
    return !this.habilidade.descricao || this.habilidade.descricao.length > 45;
  }

}
