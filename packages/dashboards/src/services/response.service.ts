import { Injectable } from "@nestjs/common";
import { ICustomDahsboard } from "../interfaces/custom-dashboard.interface";

@Injectable()
export class ResponseService {
    constants: ICustomDahsboard[];
    target: string;
    issues: any[]= [];

    outputDashboardData(input) {
        this.target= input?.target;
        this.issues= input?.issues;
        return this.displayTarget();
    }

    displayTarget(){
        const dashboards= {
            'target': { 'content': {
                'first_element': this.getFirst(), 
                'second_element': this.getSecond()
            },
            'sections': ['first_section', 'second_section']
           },
           'another target': { 'content': {
            'first_element': this.getThird(),
            },
                'sections': ['first_section', 'second_section']
            }
        }
        return {[this.target]: dashboards[this.target]};
    }

    getFirst(){
        // make business operations on issues: filter, group by, compute, push...
        // return result
    }

    getSecond(){
        // make business operations on issues: filter, group by, compute, push...
        // return result
    }

    getThird(){
        // make business operations on issues: filter, group by, compute, push...
        // return result
    }
}
