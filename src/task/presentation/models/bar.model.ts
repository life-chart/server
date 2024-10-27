import { ApiProperty } from '@nestjs/swagger';

export class BarModel {
  @ApiProperty()
  public readonly position: [number, number];

  @ApiProperty()
  public readonly date: string;
}
