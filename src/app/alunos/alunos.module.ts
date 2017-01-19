import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent
    ],
    providers: [AlunosService],
})
export class AlunosModule { }
