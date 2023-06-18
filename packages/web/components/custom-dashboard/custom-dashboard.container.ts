import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'custom-dashboard-container',
  templateUrl: './custom-dashboard.container.html',
  styleUrls: ['./custom-dashboard.container.scss']
})

export class CustomDashboardContainer implements OnChanges {
  @Input('dashboards') dashboards: any;
  sections: string[] = [];
  source: any[] = [];
  footer: any[] = [];
  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.fillDatasource();
  }

  /**
   * fill angular material table data source
   */
  fillDatasource(){
    const item= this.dashboards && Object.keys(this.dashboards)[0];
    this.sections= this.dashboards[item]?.sections;
    for(let [key, value] of Object.entries(this.dashboards[item]?.content)){
      const { content, ...result } = value as any;
      this.source = [...this.source, {
        key,
        content,
        columns: content.length>0 ? Object.keys(content[0]) : [],
        footer: { ...result}
      }]
    }
  }

  /**
   * send http request with given target name
   * @param target 
   */
  getTarget(target: string){
    // fetch custom dashboard in relation with that target name
  }

}
