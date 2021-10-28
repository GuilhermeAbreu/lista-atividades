import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtividadeInterface } from 'src/app/components/atividade/atividade.model';
import { AtividadeService } from 'src/app/components/atividade/atividade.service';

@Component({
  selector: 'app-atividade-create',
  templateUrl: './atividade-create.component.html',
  styleUrls: ['./atividade-create.component.css']
})
export class AtividadeCreateComponent implements OnInit {

  atividade : AtividadeInterface = {
    descricao: '',
    concluido: false
  }

  textStatusButton = "Definir como concluido"

  constructor(private atividadeService:  AtividadeService, private router: Router) { }

  ngOnInit(): void {
  }

  alterarStatusDaAtividade(){
    if(!this.atividade.concluido){
      this.textStatusButton = "Definir como não concluido"
    }else{
      this.textStatusButton = "Definir como concluido"
    }
    this.atividade.concluido = !this.atividade.concluido
  }

  createAtividade(){

    this.atividadeService.create(this.atividade)
    .subscribe((atividade: AtividadeInterface) => {
      this.atividadeService.showMessage("Criado com sucesso.")
      this.router.navigate(['/atividades'])
    })

  }

  cancel(){
    this.router.navigate(['/atividades']) 
  }
  
}
