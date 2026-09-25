export type StatusTable = "donations" | "investor_enquiries";
export type StatusUpdate = (
  table: StatusTable,
  id: string,
  status: string,
) => PromiseLike<{ error: unknown | null }>;

export async function updateRecordStatus(
  update: StatusUpdate,
  table: StatusTable,
  id: string,
  status: string,
): Promise<boolean> {
  try {
    const { error } = await update(table, id, status);
    return !error;
  } catch {
    return false;
  }
}
