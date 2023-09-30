import { IsInt, IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
