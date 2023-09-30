// src/leads/repositories/lead.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Lead } from '../entities/lead.entity';
import { CreateLeadDto } from '../dto/create-lead.dto';
import { UpdateLeadDto } from '../dto/update-lead.dto';

@EntityRepository(Lead)
export class LeadRepository extends Repository<Lead> {
  async createLead(createLeadDto: CreateLeadDto): Promise<Lead> {
    const lead = this.create(createLeadDto);
    return await this.save(lead);
  }

  async findAllLeads(): Promise<Lead[]> {
    return await this.find();
  }

  async findLeadById(id: number): Promise<Lead> {
    return await this.findOne({ where: { id: id } });
  }

  async updateLead(id: number, updateLeadDto: UpdateLeadDto): Promise<Lead> {
    await this.update(id, updateLeadDto);
    return await this.findOne({ where: { id: id } });
  }

  async removeLead(id: number): Promise<void> {
    await this.delete(id);
  }
}
