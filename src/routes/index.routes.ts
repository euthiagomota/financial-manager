import { Router } from "express";
import userRoutes from './user.routes';
import revenueRoutes from './revenue.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/revenues', revenueRoutes);

export default router;