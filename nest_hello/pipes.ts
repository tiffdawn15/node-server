import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException("Validation failed");
    }
    return val;
  }


// Parse Int Pipe: 
//   @Get()
//   async findOne(@Query('id', ParseIntPipe) id: number) {
//     return this.usersService.findOne(id);
//   }

/** 
 * Pipes: Validation and transormation of databefore passed to route handler
 * 
 * 
 * @Injectable() annotation PipeTransform interface 
 * 
 * Validation: Most common use case 
 * Transformation: Transform data into desired format
 * 
 * OUT OF THE BOX PIPES: 
 * 1) ValidationPipe: validate input data
 * 2) ParseFloatPipe: transform string to float
 * 3) ParseBoolPipe: transform string to boolean
 * 4) ParseArrayPipe: transform string to array
 * 5) ParseUUIDPipe
 * 6) ParseEnumPipe
 * 7) ParseFilePipe
 */

}