import { admissions, contacts, type Admission, type Contact, type InsertAdmission, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createAdmission(admission: InsertAdmission): Promise<Admission>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async createAdmission(admission: InsertAdmission): Promise<Admission> {
    const [result] = await db
      .insert(admissions)
      .values(admission)
      .returning();
    return result;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return result;
  }
}

export const storage = new DatabaseStorage();