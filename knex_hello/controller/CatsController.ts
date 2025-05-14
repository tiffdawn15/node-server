import {
    Controller,
    Get,
    Param,
    Body,
    Post,
    Patch,
    Delete,
  } from "@nestjs/common";
  
  @Controller("cats")
  export class CatsController {
    @Get()
    findAll(): string {
      return "This action returns all cats";
    }
  
    @Get(":id")
    findOne(@Param("id") id: number): string {
      return `This action returns a cat with the provided id`;
    }
  
    @Post()
    create(@Body() body: any): string {
      return `This action returns the body of the cat`;
    }
  
    @Patch("id")
    update(@Param("id") id: number, @Body() body: any): string {
      return `This action updates the body of the cat`;
    }
  
    @Delete("id")
    remove(@Param("id") id: number): string {
      return `This action removes a cat`;
    }
  }