import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeInterface } from 'src/app/components/atividade/atividade.model';
import { AtividadeService } from 'src/app/components/atividade/atividade.service';

@Component({
  selector: 'app-atividade-update',
  templateUrl: './atividade-update.component.html',
  styleUrls: ['./atividade-update.component.css']
})
export class AtividadeUpdateComponent implements OnInit {

  atividade : AtividadeInterface = {
    descricao: '',
    concluido: false
  }

  textStatusButton : string = "Definir como concluido"

  id = this.activatedRoute.snapshot.params.id

  constructor(private atividadeService:  AtividadeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.id){
        this.atividadeService.readById(this.id)
      .subscribe(atividade => {
        this.atividade = atividade 
        this.alterarTextoDoBotao()
      })
    }


  }

  alterarStatusDaAtividade(){
    this.atividade.concluido = !this.atividade.concluido
    this.alterarTextoDoBotao()
  }

  alterarTextoDoBotao(){
    if(this.atividade.concluido){
      this.atividadeService.showMessage(`Atividade Marcado concluida.`)
      this.textStatusButton = "Definir como não concluido"
    }else{
      this.atividadeService.showMessage(`Atividade Marcado não concluida.`)
      this.textStatusButton = "Definir como concluido"
    }
  }

  updateAtividade(){
    this.atividadeService.updateAtividade(this.id, this.atividade)
    .subscribe((atividade: AtividadeInterface) => {
      this.atividadeService.showMessage("Atividade atualizada com sucesso.")
      this.router.navigate(['/atividades/update'])
    })

  }

  cancel(){
    this.router.navigate(['/atividades']) 
  }

}
