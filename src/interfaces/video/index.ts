import { RentalInterface } from 'interfaces/rental';
import { StudioInterface } from 'interfaces/studio';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  description?: string;
  rental_price: number;
  studio_id: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  studio?: StudioInterface;
  _count?: {
    rental?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  studio_id?: string;
}
