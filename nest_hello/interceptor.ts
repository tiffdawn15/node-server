import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from "@nestjs/common";
  import { Observable } from "rxjs";
  import { tap } from "rxjs/operators";
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      console.log("Before...");
  
      const now = Date.now();
      return next
        .handle()
        .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
    }
  }

/**
 * Interceptoer: Class annotated w/ @Injetable implements Nest Intereceptor 
 *  Aspect Oriented Programmig: programming paradigm that increases modularity 
 * 
 * 1) Bind extra logice before/after method execution
 * 2) Transform the result returned from the method
 * 3) Handling errors
   */  
