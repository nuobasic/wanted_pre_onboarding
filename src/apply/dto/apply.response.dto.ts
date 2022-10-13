import { PostingEntity } from "../../posting/entity/posting.entity"
import { UserEntity } from "../../user/entity/user.entity"

export class ApplyResponse{
    userId:number
    postingId:number

    constructor(userId: number, postingId: number){
        this.userId=userId
        this.postingId=postingId
    }

   
}