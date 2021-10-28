import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AtividadeInterface } from './atividade.model';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  baseURL = 'http://localhost:3000/atividades'

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  showMessage(message: string) : void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }
    )
  }

  create(atividade: AtividadeInterface) : Observable<AtividadeInterface>{
    return this.http.post<AtividadeInterface>(this.baseURL+'/create', atividade)
  }

  getAll() : Observable<AtividadeInterface[]>{
    return this.http.get<AtividadeInterface[]>(this.baseURL)
  }

  deleteAtividade(id : string | number | undefined): Observable<any> {
    return this.http.delete<any>(this.baseURL+'/delete/'+id)
  }

  editAtividade(atividade: AtividadeInterface) : Observable<AtividadeInterface>{
    return this.http.put<AtividadeInterface>(this.baseURL+'/update', atividade)
  }

}
