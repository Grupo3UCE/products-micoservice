import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {

  @IsString()
  public name: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @Min(0)    //nose permite el cero validacion
  @Type(() => Number ) //transforma a number sino da error
  public price: number;

}