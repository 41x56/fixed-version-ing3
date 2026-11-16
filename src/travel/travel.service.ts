import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';



export interface Trip{
id:number;
name:string;
price:number;


}

@Injectable()
export class TravelService {
  private trips: Trip[]=[
    {id:1 , name:'to china',price:9000},
    {id:2 , name:'to morocco',price:4000},


  ];
  create(createTravelDto: CreateTravelDto) {
    return 'planifier un nouveau voyage ici';
  }

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    const trip = this.trips.find((item) => item.id === id);
    if (!trip) {
      throw new NotFoundException(`Le voyage avec l'id ${id} n'existe pas`);
    }
    return trip;;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
  
}
