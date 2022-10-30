import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { cp } from "fs";
import { number } from "joi";
import { UserEntity } from "../user/entity/user.entity";
import { Role } from "../user/entity/user.role";
import { UserService } from "../user/user.service";
import { getConnection, Repository } from "typeorm";
import { CompnayRequest } from "./dto/company.request.dto";
import { CompanyEntity } from "./entity/company.entity";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  async register(compnayRequest: CompnayRequest, user: UserEntity) {
    const post = new CompanyEntity();

    if (user.role === Role.USER) {
      throw new ForbiddenException("권한이 없는 유저 입니다.");
    }

    post.country = compnayRequest.country;
    post.name = compnayRequest.name;
    post.region = compnayRequest.region;
    post.user = user;

    const savePost = await this.companyRepository.save(post);

    return savePost;
  }

  async update(id: number, compnayEntity: CompanyEntity): Promise<void> {
    const exitedComapny = await this.companyRepository.findOne({
      where: { id },
    });
    if (exitedComapny) {
      await CompanyEntity.createQueryBuilder()
        .update(CompanyEntity)
        .set({
          country: compnayEntity.country,
          name: compnayEntity.name,
          region: compnayEntity.region,
        })
        .where("id= :id", { id })
        .execute();
    }
  }
  async deleteCompany(id: number): Promise<void> {
    await this.companyRepository.delete(id);
  }

  async allCompany() {
    return this.companyRepository.find();
  }

  async findCompany(id: number) {
    const company = await this.companyRepository.findOne({ where: { id } });

    if (!company) {
      throw new NotFoundException(`Company (id: ${id}) was not found.`);
    }

    return company;
  }
}
