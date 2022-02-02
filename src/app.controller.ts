import { Controller, Get, Res } from '@nestjs/common';
import axios from 'axios';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  async getImage(@Res() response: Response): Promise<Response<Buffer>> {
    const imageResponse = await axios.get<ArrayBuffer>(
      'https://pics.avs.io/al_square/1000/1000/S7.webp',
      {
        responseType: 'arraybuffer',
      },
    );
    const imageBuffer = Buffer.from(imageResponse.data);

    return response.setHeader('Content-Type', 'image/webp').send(imageBuffer);
  }
}
