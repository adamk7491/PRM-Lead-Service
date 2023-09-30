// src/leads/leads.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsService } from './leads.service';
import { LeadRepository } from './repositories/lead.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LeadRepository])],
  providers: [LeadsService],
  exports: [LeadsService],
})
export class LeadsModule {}
