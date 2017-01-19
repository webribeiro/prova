import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01'},
    {id: 2, nome: 'Aluno 02'},
    {id: 3, nome: 'Aluno 03'},
    {id: 2, nome: 'Aluno 04'},
    {id: 2, nome: 'Aluno 05'},
    {id: 2, nome: 'Aluno 06'},
    {id: 2, nome: 'Aluno 07'},
    {id: 2, nome: 'Aluno 08'},
    {id: 2, nome: 'Aluno 09'},
    {id: 2, nome: 'Aluno 10'},
    {id: 2, nome: 'Aluno 11'},
    {id: 2, nome: 'Aluno 12'},
    {id: 2, nome: 'Aluno 13'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}
