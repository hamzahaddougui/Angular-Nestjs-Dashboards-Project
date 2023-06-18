import { IFields } from "./fields.interface";

export interface ICustomDahsboard {
   name: string;
   fields: [IFields];
   profile: string;
}
