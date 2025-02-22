import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SubAreaService } from '../services/sub-area.service';
import { DataService } from '../services/data.service';
import { Constants } from '../shared/utils/constants';
import { FormService } from '../services/form.service';

@Injectable({
  providedIn: 'root',
})
export class FormResolver implements Resolve<void> {
  constructor(
    protected subAreaService: SubAreaService,
    protected dataService: DataService,
    protected formService: FormService
  ) {}
  async resolve(route: ActivatedRouteSnapshot) {
    const activity = route.data['activity'];
    if (
      !this.dataService.checkIfDataExists('accordion-' + activity) &&
      route.queryParams['date'] &&
      route.queryParams['orcs'] &&
      route.queryParams['subAreaName']
    ) {
      this.subAreaService.fetchSubArea(
        Constants.dataIds.ENTER_DATA_SUB_AREA,
        route.queryParams['orcs'],
        route.queryParams['subAreaName'],
        route.queryParams['date']
      );
      this.formService.setFormParams(route.queryParams);
    }
  }
}
