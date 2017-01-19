import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const alunosRoutes = [
    {path: '', component: AlunosComponent, children : []}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}