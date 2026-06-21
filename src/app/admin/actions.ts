'use server';

import { getDb, saveDb, Database } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function updateDatabase(newDb: Database) {
  saveDb(newDb);
  revalidatePath('/', 'layout'); // Revalidate everything
  return { success: true };
}
