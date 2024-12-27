/**
 * Represents a demo class for Codeo.
 *
 * @remarks
 * This class is used to demonstrate the initialization and configuration of Codeo.
 *
 * @example
 * Here's an example of how to create an instance of the CodeoDemo class:
 * ```typescript
 * const config = { setting1: 'value1', setting2: 'value2' };
 * const demo = new CodeoDemo(config);
 * ```
 */
export class CodeoDemo {
  private readonly isAlreadyInitialized: boolean = false; // Differentiate boolean values by color
  private readonly isAlreadyConfigured: boolean = true; // Differentiate boolean values by color
  private codeThemeStatus: undefined | string = undefined; // Differentiate undefined values by color
  private codeTheme: string | null = null; // Differentiate string values by color

  /**
   * Creates an instance of the class with the provided configuration.
   *
   * @param config - An object containing configuration settings.
   * Default config will contains `RESOURCE_NAME` and `RESOURCE_URL`.
   */
  constructor(private readonly config: any) {
    this.config.isAlreadyConfigured = this.isAlreadyConfigured;
    this.config.isAlreadyInitialized = this.isAlreadyInitialized;
    this.codeoInit();
  }

  /**
   * Initializes the Codeo Demo.
   *
   * This method is used for showing the demo of the doc color.
   * It logs a message to the console indicating that the Codeo Demo has been initialized.
   */
  public codeoInit() {
    this.codeThemeStatus = "INITIALIZED";
    this.codeTheme = "DARK";
    console.log("Codeo Demo Initialized", this.codeThemeStatus);
    console.log("Codeo Demo Initialized", this.config);
    console.log("Codeo Demo Initialized", this.codeTheme);
  }
}


