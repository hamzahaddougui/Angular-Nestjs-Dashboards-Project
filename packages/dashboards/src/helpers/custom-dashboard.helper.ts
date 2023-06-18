import { Injectable } from "@nestjs/common";
import { ICountFields } from "../interfaces/count-fields.interface";

@Injectable()
export class CustomDashboardHelper{

    feedDashboard(criterias: string[]){
        return {criterias};
    }

    constructDashboardsMap(){
        const FIRST_DASHBOARD: ICountFields= this.feedDashboard(['field_1', 'field_2', 'field_3']);
        const SECOND_DASHBOARD: ICountFields= this.feedDashboard(['field', 'field_4']);
        const CUSTOM_DASHBOARD= {
            'first_dashboard': FIRST_DASHBOARD,
            'second_dashboard': SECOND_DASHBOARD,
        }
        return CUSTOM_DASHBOARD;
    }
}