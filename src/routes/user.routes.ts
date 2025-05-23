import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { CreateUserService } from "../services/create-user.service";
import { UserController } from "../controllers/user.controller";
import { validateDto } from "../middlewares/validation-dto.middleware";
import { RequestUserDto } from "../dto/users/request.user.dto";

const router = Router();

const userRepository = AppDataSource.getRepository(User);
const createUserService = new CreateUserService(userRepository);
const userController = new UserController(createUserService);

router.post('/register',
   validateDto(RequestUserDto),
   async (req, res): Promise<any> => {
      const result = await userController.register(req.body);
      return res.status(201).json(result);
   });

export default router;


