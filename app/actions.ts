'use server';

import { progressRecord } from "@/lib/airtable";
import { revalidatePath } from "next/cache";


export async function progress(id: string, testament: string) {
  try {
    const res = await progressRecord(id, testament);
    console.log(res);
    revalidatePath('/');
  } catch (error) {
    console.error('progress function error');
    console.log(error);
  }
}