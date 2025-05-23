
import { RequestUserDto } from "../dto/users/request.user.dto";
import { ResponseUserDto } from "../dto/users/response.user.dto";
import { CreateUserService } from "../services/create-user.service";

export class UserController {

     constructor(
            private readonly createUserService: CreateUserService,
        ) {
            this.createUserService = createUserService;
        }

        public async register(request: RequestUserDto): Promise<ResponseUserDto> {
            return this.createUserService.execute(request);
        }
}