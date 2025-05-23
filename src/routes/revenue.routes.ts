import { Router } from "express";
import { Revenue } from "../entities/revenue.entity";
import { AppDataSource } from "../data-source";
import { RevenueService } from "../services/revenue.service";
import { User } from "../entities/user.entity";
import { RevenueController } from "../controllers/revenue.controller";
import { validateDto } from '../middlewares/validation-dto.middleware';
import { RequestRevenueDto } from "../dto/revenues/request.revenue.dto";
import { HttpStatusCode } from "../errors/enum/http-status-code";

const router = Router();

const revenueRepository = AppDataSource.getRepository(Revenue);
const userRepository = AppDataSource.getRepository(User);
const revenueService = new RevenueService(revenueRepository, userRepository);
const revenueController = new RevenueController(revenueService);

router.post('/register/:userId',
    validateDto(RequestRevenueDto),
    async (req, res): Promise<void> => {

        const userId = parseInt(req.params.userId);

        if (isNaN(userId)) {
            res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Invalid user ID' });
            return;
        }

        const result = await revenueController.createRevenue(req.body, userId)
        res.status(201).json(result);
    });

export default router;