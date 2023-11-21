export class TodoItemStatusConstant {
  public static NEW: string = 'New';
  public static IN_PROGRESS: string = 'In progress';
  public static CANCELLED: string = 'Cancelled';
  public static COMPLETE: string = 'Complete';
  public static BLOCKED: string = 'Blocked';

  public static statuses(): GenericKeyValueInterface[] {
    return Object.entries(this).map(([key, value]) => ({ key, value })) as {
      key: string;
      value: string;
    }[];
  }
}
