import { DataService } from '../../services/data.service';
import { ResponseService } from '../../services/response.service';
import { CustomDashboardHelper } from '../../helpers/custom-dashboard.helper';

@Injectable()
export class CustomDashboardService {
    constructor(
        private customDashboardHelper: CustomDashboardHelper,
        private dataService: DataService,
        private responseService: ResponseService
    ) { }

    async getDashboard(body: any){
        let dashboards= this.customDashboardHelper.constructDashboardsMap();
        const {target, requestBody}= this.getTarget(body?.target, body?.role, dashboards);
        let issues = await this.dataService.fetchData(requestBody);
        let computedResult= this.responseService.outputDashboardData({issues, target})
        return ResponseBuilder(SuccefulServiceResponse(computedResult));
    }

    getTarget(target: string, role: string, dashboards){
     if(role){
        target= target || 'first_dashboard';
     }
     if(role){
        target= target || 'second_dashboard';
     }
     const result= {target, requestBody: dashboards[target]};
     return result;
    }
}
