import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

import {FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
   //pipes: [FilterPipe]
  
})
export class AlunosComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}

