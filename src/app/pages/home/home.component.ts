import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataInfoService } from './../../services/data-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public form: FormGroup;

  public states: string[];
  public countys: string[];

  constructor(
    private dataInfoService: DataInfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.states = new Array();
    this.countys = new Array();

    this.form = new FormGroup({
      state: new FormControl('', [Validators.required]),
      county: new FormControl('', [Validators.required])
    });

    this.dataInfoService.getStates().subscribe(states => {
      this.states = states.map(state => {
        return state.sigla;
      });
    });
  }

  submit(): void{
    const { county, state } = this.form.value;
    this.router.navigate(['/map', state, county]);
  }

  verifyState(): boolean{
    const sigla: string = this.form.get('state').value;
    const countyAux: string = this.form.get('county').value;

    if (sigla.length === 2) {
      if (!this.countys.length) {
        this.dataInfoService.getCountys(sigla).subscribe(countys => {
          this.countys = countys.map(county => {
            return county.nome;
          });
        });
      }
      console.clear();
      return true;
    }else if (countyAux.length) {
      this.countys = [];
      this.form.get('county').setValue('');
    }
    console.clear();
    return false;
  }
}
