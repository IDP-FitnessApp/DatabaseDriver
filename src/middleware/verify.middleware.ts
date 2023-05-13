import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class VerifyAuthTokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
        const authorizationHeader = req?.headers?.authorization;
        const token = authorizationHeader?.substring(7);
        const verifyUrl = 'http://authservice:3000/auth/verify';
        let verifyResponse: AxiosResponse<{ userId: string; }, any>;

        try {
            verifyResponse = await axios.post(verifyUrl, { token });
        }
        catch(error) {}
        
        if (!verifyResponse) throw new HttpException('verify_failed', HttpStatus.UNAUTHORIZED);
        
        req['userId'] = verifyResponse.data.userId;
        next();
    }
}