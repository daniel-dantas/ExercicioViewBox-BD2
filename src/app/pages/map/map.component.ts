import { DataInfoService } from './../../services/data-info.service';
import { County } from './../../models/County';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public county: County;
  public svgData: string;
  public countyAuxName: string;

  constructor(
    private dataInfoService: DataInfoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCounty();
  }

  loadCounty(): void{
    this.route.params.pipe(
      map(params => { this.countyAuxName = params.county; return params.county; }),
      switchMap(county => this.dataInfoService.getSVG(county))
    ).subscribe(svg => {
      this.svgData = svg;
    });

    this.route.params.pipe(
      switchMap(params => this.dataInfoService.getCountys(params.state)),
      switchMap(countys => countys.filter(county => county.nome === this.countyAuxName))
    ).subscribe(county => {
      this.county = county;
    });

  }

}
