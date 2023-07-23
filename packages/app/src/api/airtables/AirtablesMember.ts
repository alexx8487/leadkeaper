import { FieldSet } from "airtable";

export interface AirtableMember extends FieldSet {
  id: string;
  name: string;
  phone: string;
  email: string;
  code: string;
  lessonCount: number;
  startDate: number;
  endDate: number;
}
