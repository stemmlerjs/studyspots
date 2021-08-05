export class FlowUtils {
  public static sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
