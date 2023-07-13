import { FormBuilder } from '@angular/forms';
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PopupCadastroMedicamentoComponent } from '../popup-cadastro-medicamento/popup-cadastro-medicamento.component';
import { MatDialog } from '@angular/material/dialog';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Medicamento } from 'src/app/model/medicamento';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private medicamentosService: MedicamentosService
    ) {}

  rotaAtual = ""

  panelOpenState = false;

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.rotaAtual = this.activatedRoute?.root?.firstChild?.snapshot?.routeConfig?.path ?? ""
        this.onWindowScroll();
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    const nav = this.elementRef.nativeElement.querySelector('#nav');

    if (this.rotaAtual === "" && window.scrollY > 90) {
      nav.style.background = '#fff';
      return
    }

    if(this.rotaAtual){
      nav.style.background = '#fff';
      return
    }
    nav.style.background = 'transparent';
  }

  home(): void{
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupCadastroMedicamentoComponent, {
      panelClass: 'custom-dialog-container-cadastro',
    });

    dialogRef.afterClosed().subscribe(result => {

      const medicamento = this.formMedicacao(result)
      this.adicionarMedicamento(medicamento.value)
    });
  }


  formMedicacao(result: any){
    const chavesIndicacao = Object.keys(result.indicacoes);
    const valoresIndicacao = chavesIndicacao.map(chave => result.contraIndicacoes[chave]);
    const indicacao = valoresIndicacao.join("\\*");

    const chavesContraIndicacao = Object.keys(result.contraIndicacoes);
    const valoresContraIndicacao = chavesContraIndicacao.map(chave => result.contraIndicacoes[chave]);
    const contraIndicacao = valoresContraIndicacao.join("\\*");

    const formMedicamento = this.formBuilder.group({
      nome: result.nome,
      medicamentoUso: result.medicamentoUso,
      tipo: result.tipo,
      modoDeUso: result.modoDeUso,
      quantidadeMg: result.quantidadeMg,
      quantidadeMl: result.quantidadeMl,
      indicacao: indicacao,
      contraIndicacao: contraIndicacao,
    });

    return formMedicamento;
  }

  adicionarMedicamento(medicamento : any){
    debugger
    console.log(medicamento)
    this.medicamentosService.Add(medicamento).subscribe((response: Medicamento) => {
      console.log(response)
    });
  }


}
