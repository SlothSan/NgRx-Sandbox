export class TodoItemStatusConstant {
  public static NEW: string = 'New';
  public static IN_PROGRESS: string = 'In progress';
  public static CANCELLED: string = 'Cancelled';
  public static COMPLETE: string = 'Complete';
  public static BLOCKED: string = 'Blocked';
  public static statuses(): { key: string, value: string }[] {
    return Object.entries(this)
      .filter(([key, value]) => typeof value === 'string')
      .map(([key, value]) => ({ key, value })) as { key: string, value: string }[];
  }
}
