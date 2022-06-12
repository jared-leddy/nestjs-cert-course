import { Module } from '@nestjs/common';
import { APIKeyGuard } from './guards/api-key.guard';

@Module({
  providers: [APIKeyGuard],
})
export class CommonModule {}
