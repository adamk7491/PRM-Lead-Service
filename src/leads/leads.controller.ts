import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { Lead } from './entities/lead.entity';

@ApiBearerAuth()
@ApiTags('leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  @ApiOperation({ summary: 'Create lead' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @MessagePattern('createLead')
  create(@Body() createLeadDto: CreateLeadDto) {
    return this.leadsService.create(createLeadDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found leads',
    type: Lead,
  })
  @MessagePattern('findAllLeads')
  findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Lead,
  })
  @MessagePattern('findOneLead')
  findOne(@Param('id') id: number) {
    return this.leadsService.findOne(id);
  }

  @Put()
  @ApiOperation({ summary: 'Update lead' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @MessagePattern('updateLead')
  update(@Payload() updateLeadDto: UpdateLeadDto) {
    return this.leadsService.update(updateLeadDto.id, updateLeadDto);
  }

  @MessagePattern('removeLead')
  remove(@Payload() id: number) {
    return this.leadsService.remove(id);
  }
}
