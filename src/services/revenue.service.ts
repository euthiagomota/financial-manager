import { Repository } from "typeorm";
import { Revenue } from "../entities/revenue.entity";
import { RequestRevenueDto } from "../dto/revenues/request.revenue.dto";
import { User } from "../entities/user.entity";
import { HttpException } from "../errors/http-exception";
import { HttpStatusCode } from "../errors/enum/http-status-code";
import { ResponseRevenueDto } from "../dto/revenues/response.revenue.dto";

export class RevenueService {

    constructor(
        private readonly revenueRepository: Repository<Revenue>,
        private readonly userRepository: Repository<User>,
    ) {
        this.revenueRepository = revenueRepository;
        this.userRepository = userRepository;
    }

    public async createRevenue(request: RequestRevenueDto, userId: number): Promise<ResponseRevenueDto> {

        const user = await this.userRepository.findOne({ where: { id: userId } });

        if (!user) {
            throw new HttpException('User not found', HttpStatusCode.NOT_FOUND);
        }

        try {
            const revenue = this.revenueRepository.create({
                title: request.title,
                value: request.value,
                date: request.date,
                user,
            });

            const revenueSaved = await this.revenueRepository.save(revenue);

            const response: ResponseRevenueDto = {
                id: revenueSaved.id,
                title: revenueSaved.title,
                value: revenueSaved.value,
                user: revenueSaved.user,
                date: revenueSaved.date,
                createdAt: revenueSaved.createdAt,
                updatedAt: revenueSaved.updatedAt
            };

            return response;

        } catch (error) {
            console.error('Error while creating revenue:', error);
            throw new HttpException('Error while creating the revenue', HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    }

    public async findAll() {
        return await this.revenueRepository.find();
    }
}