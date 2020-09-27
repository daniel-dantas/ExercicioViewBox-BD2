import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { County } from 'src/app/models/County';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit, OnChanges {

  public svg: SafeHtml;

  @Input() viewBox: number;
  @Input() svgData: string;

  @Input() county: County;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.county) {
      this.loadSVGData();
    }
  }

  ngOnChanges(): void{
    if (this.county) {
      this.loadSVGData();
    }
  }

  loadSVGData(): void {
    // tslint:disable-next-line: max-line-length
    if (this.county.svgData && this.county.viewBox) {
      this.svg = this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="${this.county.viewBox}"><path d="${this.county.svgData}"></path></svg>`);
    }
  }

}
