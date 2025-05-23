import { RequestRevenueDto } from "../dto/revenues/request.revenue.dto";
import { ResponseRevenueDto } from "../dto/revenues/response.revenue.dto";
import { RevenueService } from "../services/revenue.service";

export class RevenueController {

    constructor(
        private readonly revenueService: RevenueService,
    ) {
        this.revenueService = revenueService;
    }

    public async createRevenue(request: RequestRevenueDto, userId: number): Promise<ResponseRevenueDto> {

        return await this.revenueService.createRevenue(request, userId);
    }
}