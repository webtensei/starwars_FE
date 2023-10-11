import { IPerson } from '../IPerson';

export interface PeopleResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPerson[] | null;
}
