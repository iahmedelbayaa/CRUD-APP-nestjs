import { PartialType } from "@nestjs/mapped-types";
import { Be3oDto } from "../be3o.dto/be3o.dto";

export class UpdateBe3oDto extends PartialType(Be3oDto){}
