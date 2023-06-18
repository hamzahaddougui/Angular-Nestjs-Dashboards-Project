import { Body, Controller, Post } from '@nestjs/common';
import { CustomDashboardService } from './custom-dashboard.service';
import { ICustomDahsboard } from '../../interfaces/custom-dashboard.interface';

@Controller('custom-dashboard')
export class CustomDashboardController {
    constructor(private readonly customDashboardService: CustomDashboardService) { }

    @Post()
    async getDashboard(@Body() body): Promise<IResponse<ICustomDahsboard>> {
        try {
            let result = await this.customDashboardService.getDashboard(body);
            return ResponseBuilder(result);
        } catch (error) {
            return ErrorApi("Error fetching dashboard details")
        }
    }
}
