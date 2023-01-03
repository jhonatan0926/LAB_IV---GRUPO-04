import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises: Pais[] = [];

  selectedPais: Pais = new Pais();

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }

  resetForm(form: NgForm){
    if(form){
      form.reset()
    }
  }

  addPais(form: NgForm) {
    if(form.value._id) {
      this.paisService.patchPais(form.value)
      .subscribe( res => {
        this.resetForm(form)
      })
    } else {
      this.paisService.postPais(form.value)
      .subscribe( res => {
        this.resetForm(form)
      })
      this.getPaises()
    }
  }

  getPaises() {
    this.paisService.getPais()
    .subscribe( res => {
      this.paises = res as Pais []
    })
  }

  editPais(pais: Pais) {
    this.selectedPais = pais
    console.log("Editando")
  }

  deletePais(pais: Pais) {
    if(confirm('Realmente quiere borrar el pais?')) {
      this.paisService.deletePais(pais)
      .subscribe( res => {
        this.getPaises()
      })
      console.log("Deletando")
    }
  }

}
