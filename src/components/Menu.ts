import { Player } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * Menu class
 */
export default class Menu {
  /**
   * @private @var {number|null} Menu pointer
   */
  private ptr: number | null = null;

  /**
   * @private @var {number|null} Menu ID
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {string} title
   * @param {number} columns
   * @param {number} x
   * @param {number} y
   * @param {number} column1Width
   * @param {number} column2Width
   * @throws Will throw an error if the menu creation fails
   */
  constructor(
    title: string,
    columns: number,
    x: number,
    y: number,
    column1Width: number,
    column2Width: number
  );

  constructor(
    title: string | number,
    columns?: number,
    x?: number,
    y?: number,
    column1Width?: number,
    column2Width?: number
  ) {
    if (arguments.length < 2 && typeof title === "number") {
      const result = internal_omp.Menu.FromID(title);
      if (result.ret === 0) {
        throw new Error("Failed to create menu");
      }

      this.ptr = PTR(result.ret);
      this.id = title;
      return;
    }

    const result = internal_omp.Menu.Create(
      title,
      columns,
      x,
      y,
      column1Width,
      column2Width
    );
    if (result.ret === 0) {
      throw new Error("Failed to create menu");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the menu retrieval fails
   */
  destroy(): void {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.Destroy(this.ptr);
    if (result.ret) {
      this.ptr = null;
      this.id = null;
      return;
    } else {
      return;
    }
  }

  /**
   * @method getPtr
   * @description get menu pointer
   * @returns {number|null} menu pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get menu id
   * @returns {number|null} menu id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method addItem
   * @param {number} column
   * @param {string} text
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  addItem(column: number, text: string): number {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.AddItem(this.ptr, column, text);
    return result.ret;
  }

  /**
   * @method setColumnHeader
   * @param {number} column
   * @param {string} headerTitle
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  setColumnHeader(column: number, headerTitle: string): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.SetColumnHeader(
      this.ptr,
      column,
      headerTitle
    );
    return result.ret;
  }

  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  showForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.ShowForPlayer(this.ptr, player.getPtr());
    return result.ret;
  }

  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  hideForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.HideForPlayer(this.ptr, player.getPtr());
    return result.ret;
  }

  /**
   * @method disable
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  disable(): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.Disable(this.ptr);
    return result.ret;
  }

  /**
   * @method disableRow
   * @param {number} row
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  disableRow(row: number): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.DisableRow(this.ptr, row);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method isDisabled
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isDisabled(): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.IsDisabled(this.ptr);
    return result.ret;
  }

  /**
   * @method isRowDisabled
   * @param {number} row
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isRowDisabled(row: number): boolean {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.IsRowDisabled(this.ptr, row);
    return result.ret;
  }

  /**
   * @method getColumns
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  getColumns(): number {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.GetColumns(this.ptr);
    return result.ret;
  }

  /**
   * @method getItems
   * @param {number} column
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  getItems(column: number): number {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.GetItems(this.ptr, column);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getPos(): { ret: boolean; x: number; y: number } {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.GetPos(this.ptr);
    return result;
  }

  /**
   * @method getColumnWidth
   * @returns {{ret: boolean, column1Width: number,column2Width: number}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getColumnWidth(): {
    ret: boolean;
    column1Width: number;
    column2Width: number;
  } {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.GetColumnWidth(this.ptr);
    return result;
  }

  /**
   * @method getColumnHeader
   * @param {number} column
   * @returns {{ret: boolean, header: string}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getColumnHeader(column: number): { ret: boolean; header: string } {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.GetColumnHeader(this.ptr, column);
    return result;
  }

  /**
   * @method getItem
   * @param {number} column
   * @param {number} row
   * @returns {{ret: boolean, item: string}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getItem(column: number, row: number): { ret: boolean; item: string } {
    if (!this.ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = internal_omp.Menu.GetItem(this.ptr, column, row);
    return result;
  }
}
