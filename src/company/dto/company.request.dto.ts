import { UserEntity } from "src/user/entity/user.entity";

export class CompnayRequest {
  name: string;

  country: string;

  region: string;

  user: UserEntity;
}
