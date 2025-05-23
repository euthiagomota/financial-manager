import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { RequestUserDto } from "../dto/users/request.user.dto";
import { HttpException } from "../errors/http-exception";
import { HttpStatusCode } from "../errors/enum/http-status-code";
import { ResponseUserDto } from "../dto/users/response.user.dto";

export class CreateUserService {

    constructor(
        private readonly userRepository: Repository<User>,
    ) {
        this.userRepository = userRepository;
    }

    public async execute(request: RequestUserDto): Promise<ResponseUserDto> {

        if (request.password !== request.confirmPassword) {
            throw new HttpException('Passwords must match.', HttpStatusCode.BAD_REQUEST)
        }
        const { name, email, password } = request;

        const newUser = this.userRepository.create({ name, email, password })

        const user = await this.userRepository.save(newUser);

        const response: ResponseUserDto = {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        };

        return response;
    }
}