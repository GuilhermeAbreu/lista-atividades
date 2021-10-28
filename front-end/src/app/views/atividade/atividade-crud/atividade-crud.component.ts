import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtividadeInterface } from 'src/app/components/atividade/atividade.model';
import { AtividadeService } from 'src/app/components/atividade/atividade.service';

@Component({
  selector: 'app-atividade-crud',
  templateUrl: './atividade-crud.component.html',
  styleUrls: ['./atividade-crud.component.css']
})
export class AtividadeCrudComponent implements OnInit {

  atividades! : AtividadeInterface[] 

  constructor(private router: Router, private atividadeService: AtividadeService) {}

  ngOnInit(): void {
      this.atividadeService.getAll().subscribe(atividades => {
        this.atividades = atividades
      });
  }

  navegateToAtividadeCreate(): void {
    this.router.navigate(['/atividades/create']);
  }

  deleteAtividade(id: number | string | undefined): void {
    if(id === undefined) return this.atividadeService.showMessage('Selecione uma atividade para excluir')
     this.atividadeService.deleteAtividade(id).subscribe(() => {
      this.atividadeService.showMessage('Atividade excluída com sucesso!');
      this.atividades = this.atividades.filter(atividade => atividade.id !== id);
    });
  }

}
