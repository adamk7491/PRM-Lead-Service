// src/leads/leads.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lead } from './entities/lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { LeadRepository } from './repositories/lead.repository';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(LeadRepository)
    private readonly leadRepository: LeadRepository,
  ) {}

  async create(createLeadDto: CreateLeadDto): Promise<Lead> {
    return await this.leadRepository.createLead(createLeadDto);
  }

  async findAll(): Promise<Lead[]> {
    return await this.leadRepository.findAllLeads();
  }

  async findOne(id: number): Promise<Lead> {
    return await this.leadRepository.findLeadById(id);
  }

  async update(id: number, updateLeadDto: UpdateLeadDto): Promise<Lead> {
    return await this.leadRepository.updateLead(id, updateLeadDto);
  }

  async remove(id: number): Promise<void> {
    await this.leadRepository.removeLead(id);
  }
}
