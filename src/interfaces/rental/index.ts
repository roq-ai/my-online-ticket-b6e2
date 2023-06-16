import { UserInterface } from 'interfaces/user';
import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  customer_id: string;
  video_id: string;
  rental_start: any;
  rental_end: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  video?: VideoInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  video_id?: string;
}
