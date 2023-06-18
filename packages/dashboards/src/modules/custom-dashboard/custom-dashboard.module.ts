import { Module } from '@nestjs/common';
import { CustomDashboardService } from './custom-dashboard.service';
import { DataService } from '../../services/data.service';
import { ResponseService } from '../../services/response.service';
import { CustomDashboardController } from './custom-dashboard.controller';

@Module({
    imports: [],
    controllers: [CustomDashboardController],
    providers: [CustomDashboardService, DataService, ResponseService],
    exports: []
})
export class CustomDashboardModule {}
