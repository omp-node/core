import { Player } from "./index";
import { PTR, internal_omp } from "../globals";
import { TEXT_DRAW_ALIGN, TEXT_DRAW_FONT } from "../enums";

/**
 * TextDraw class
 */
export default class TextDraw {
  /**
   * @var ptr
   * @description TextDraw pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description TextDraw ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   * @param {string} text
   * @throws Will throw an error if the textDraw creation fails
   */
  constructor(x: number, y: number, text: string);

  constructor(x: number, y?: number, text?: string) {
    if (arguments.length < 2) {
      const result = internal_omp.TextDraw.FromID(x);
      if (result.ret === 0) {
        throw new Error("Failed to create textdraw");
      }

      this.ptr = PTR(result.ret);
      this.id = x;
      return;
    }

    const result = internal_omp.TextDraw.Create(x, y!, text!);
    if (result.ret === 0) {
      throw new Error("Failed to create textDraw");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the textDraw retrieval fails
   */
  destroy(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.Destroy(this.ptr);
    if (result.ret) {
      this.ptr = null;
      this.id = null;
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method getPtr
   * @description get textDraw pointer
   * @returns {number|null} textDraw pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get textDraw id
   * @returns {number|null} textDraw id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method isVisibleForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isVisibleForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.IsVisibleForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method setLetterSize
   * @param {number} sizeX
   * @param {number} sizeY
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setLetterSize(sizeX: number, sizeY: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetLetterSize(this.ptr, sizeX, sizeY);
    return result.ret;
  }

  /**
   * @method setTextSize
   * @param {number} sizeX
   * @param {number} sizeY
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setTextSize(sizeX: number, sizeY: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetTextSize(this.ptr, sizeX, sizeY);
    return result.ret;
  }

  /**
   * @method setAlignment
   * @param {TEXT_DRAW_ALIGN} alignment
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setAlignment(alignment: TEXT_DRAW_ALIGN): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetAlignment(this.ptr, alignment);
    return result.ret;
  }

  /**
   * @method setColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setColor(color: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetColor(this.ptr, color);
    return result.ret;
  }

  /**
   * @method setUseBox
   * @param {boolean} use
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setUseBox(use: boolean): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetUseBox(this.ptr, use);
    return result.ret;
  }

  /**
   * @method setBoxColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setBoxColor(color: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetBoxColor(this.ptr, color);
    return result.ret;
  }

  /**
   * @method setShadow
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setShadow(size: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetShadow(this.ptr, size);
    return result.ret;
  }

  /**
   * @method setOutline
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setOutline(size: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetOutline(this.ptr, size);
    return result.ret;
  }

  /**
   * @method setBackgroundColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setBackgroundColor(color: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetBackgroundColor(this.ptr, color);
    return result.ret;
  }

  /**
   * @method setFont
   * @param {TEXT_DRAW_FONT} font
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setFont(font: TEXT_DRAW_FONT): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetFont(this.ptr, font);
    return result.ret;
  }

  /**
   * @method setProportional
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setProportional(set: boolean): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetProportional(this.ptr, set);
    return result.ret;
  }

  /**
   * @method setSelectable
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setSelectable(set: boolean): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetSelectable(this.ptr, set);
    return result.ret;
  }

  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  showForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.ShowForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  hideForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.HideForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method showForAll
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  showForAll(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.ShowForAll(this.ptr);
    return result.ret;
  }

  /**
   * @method hideForAll
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  hideForAll(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.HideForAll(this.ptr);
    return result.ret;
  }

  /**
   * @method setString
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setString(text: string): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetString(this.ptr, text);
    return result.ret;
  }

  /**
   * @method setPreviewModel
   * @param {number} model
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPreviewModel(model: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetPreviewModel(this.ptr, model);
    return result.ret;
  }

  /**
   * @method setPreviewRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} zoom
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPreviewRot(
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    zoom: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetPreviewRot(
      this.ptr,
      rotationX,
      rotationY,
      rotationZ,
      zoom
    );
    return result.ret;
  }

  /**
   * @method setPreviewVehCol
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPreviewVehCol(color1: number, color2: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetPreviewVehCol(
      this.ptr,
      color1,
      color2
    );
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPos(x: number, y: number): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetPos(this.ptr, x, y);
    return result.ret;
  }

  /**
   * @method getString
   * @returns {{ret: boolean, text: string}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getString(): { ret: boolean; text: string } {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetString(this.ptr);
    return result;
  }

  /**
   * @method getLetterSize
   * @returns {{ret: boolean, sizeX: number,sizeY: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getLetterSize(): { ret: boolean; sizeX: number; sizeY: number } {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetLetterSize(this.ptr);
    return result;
  }

  /**
   * @method getTextSize
   * @returns {{ret: boolean, sizeX: number,sizeY: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getTextSize(): { ret: boolean; sizeX: number; sizeY: number } {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetTextSize(this.ptr);
    return result;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getPos(): { ret: boolean; x: number; y: number } {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetPos(this.ptr);
    return result;
  }

  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getColor(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetColor(this.ptr);
    return result.ret;
  }

  /**
   * @method getBoxColor
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getBoxColor(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetBoxColor(this.ptr);
    return result.ret;
  }

  /**
   * @method getBackgroundColor
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getBackgroundColor(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetBackgroundColor(this.ptr);
    return result.ret;
  }

  /**
   * @method getShadow
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getShadow(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetShadow(this.ptr);
    return result.ret;
  }

  /**
   * @method getOutline
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getOutline(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetOutline(this.ptr);
    return result.ret;
  }

  /**
   * @method getFont
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getFont(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetFont(this.ptr);
    return result.ret;
  }

  /**
   * @method isBox
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isBox(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.IsBox(this.ptr);
    return result.ret;
  }

  /**
   * @method isProportional
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isProportional(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.IsProportional(this.ptr);
    return result.ret;
  }

  /**
   * @method isSelectable
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isSelectable(): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.IsSelectable(this.ptr);
    return result.ret;
  }

  /**
   * @method getAlignment
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getAlignment(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetAlignment(this.ptr);
    return result.ret;
  }

  /**
   * @method getPreviewModel
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getPreviewModel(): number {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetPreviewModel(this.ptr);
    return result.ret;
  }

  /**
   * @method getPreviewRot
   * @returns {{ret: boolean, x: number,y: number,z: number,zoom: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getPreviewRot(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    zoom: number;
  } {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetPreviewRot(this.ptr);
    return result;
  }

  /**
   * @method getPreviewVehColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getPreviewVehColor(): { ret: boolean; color1: number; color2: number } {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.GetPreviewVehColor(this.ptr);
    return result;
  }

  /**
   * @method setStringForPlayer
   * @param {Player} player
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setStringForPlayer(player: Player, text: string): boolean {
    if (!this.ptr) {
      throw new Error("TextDraw instance is not valid");
    }

    const result = internal_omp.TextDraw.SetStringForPlayer(
      this.ptr,
      player.getPtr(),
      text
    );
    return result.ret;
  }
}
