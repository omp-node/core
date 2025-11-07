import { Player } from "./index";
import { PTR, internal_omp } from "../globals";
import { TEXT_DRAW_ALIGN, TEXT_DRAW_FONT } from "src/enums";

/**
 * PlayerTextDraw class
 */
export default class PlayerTextDraw {
  /**
   * @var ptr
   * @description PlayerTextDraw pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description PlayerTextDraw ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @var player
   * @description Player for this per player entity
   * @type {Player|null}
   * @private
   */
  private player: Player | null = null;

  /**
   * @constructor
   * @param {Player} player
   * @param {number} x
   * @param {number} y
   * @param {string} text
   * @throws Will throw an error if the playerTextDraw creation fails
   */
  constructor(player: Player, x: number, y: number, text: string);

  constructor(player: Player, x: number, y?: number, text?: string) {
    if (arguments.length < 3) {
      const result = internal_omp.PlayerTextDraw.FromID(player.getPtr(), x);
      if (result.ret === 0) {
        throw new Error("Failed to create PlayerTextDraw");
      }

      this.ptr = PTR(result.ret);
      this.id = x;
      this.player = player;
      return;
    }

    const result = internal_omp.PlayerTextDraw.Create(player.getPtr(), x, y, text);
    if (result.ret === 0) {
      throw new Error("Failed to create playerTextDraw");
    }

    this.player = player;
    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerTextDraw retrieval fails
   */
  destroy(): void {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.Destroy(this.player.getPtr(), this.ptr);
    if (result.ret) {
      this.ptr = null;
      this.id = null;
      return;
    } else {
      return;
    }
  }

  /**
   * @method getPlayer
   * @description get entity's player
   * @returns {Player|null} playerTextDraw of current entity
   */
  getPlayer(): Player | null {
    return this.player;
  }

  /**
   * @method getPtr
   * @description get playerTextDraw pointer
   * @returns {number|null} playerTextDraw pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get playerTextDraw id
   * @returns {number|null} playerTextDraw id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isValid(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.IsValid(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method isVisible
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isVisible(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.IsVisible(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method setLetterSize
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setLetterSize(x: number, y: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetLetterSize(
      this.player.getPtr(),
      this.ptr,
      x,
      y
    );
    return result.ret;
  }

  /**
   * @method setTextSize
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setTextSize(x: number, y: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetTextSize(
      this.player.getPtr(),
      this.ptr,
      x,
      y
    );
    return result.ret;
  }

  /**
   * @method setAlignment
   * @param {TEXT_DRAW_ALIGN} alignment
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setAlignment(alignment: TEXT_DRAW_ALIGN): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetAlignment(
      this.player.getPtr(),
      this.ptr,
      alignment
    );
    return result.ret;
  }

  /**
   * @method setColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setColor(color: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetColor(
      this.player.getPtr(),
      this.ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method useBox
   * @param {boolean} use
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  useBox(use: boolean): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.UseBox(
      this.player.getPtr(),
      this.ptr,
      use
    );
    return result.ret;
  }

  /**
   * @method setBoxColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setBoxColor(color: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetBoxColor(
      this.player.getPtr(),
      this.ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method setShadow
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setShadow(size: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetShadow(
      this.player.getPtr(),
      this.ptr,
      size
    );
    return result.ret;
  }

  /**
   * @method setOutline
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setOutline(size: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetOutline(
      this.player.getPtr(),
      this.ptr,
      size
    );
    return result.ret;
  }

  /**
   * @method setBackgroundColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setBackgroundColor(color: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetBackgroundColor(
      this.player.getPtr(),
      this.ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method setFont
   * @param {TEXT_DRAW_FONT} font
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setFont(font: TEXT_DRAW_FONT): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetFont(
      this.player.getPtr(),
      this.ptr,
      font
    );
    return result.ret;
  }

  /**
   * @method setProportional
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setProportional(set: boolean): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetProportional(
      this.player.getPtr(),
      this.ptr,
      set
    );
    return result.ret;
  }

  /**
   * @method setSelectable
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setSelectable(set: boolean): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetSelectable(
      this.player.getPtr(),
      this.ptr,
      set
    );
    return result.ret;
  }

  /**
   * @method show
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  show(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.Show(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method hide
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  hide(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.Hide(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method setString
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setString(text: string): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetString(
      this.player.getPtr(),
      this.ptr,
      text
    );
    return result.ret;
  }

  /**
   * @method setPreviewModel
   * @param {number} model
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewModel(model: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetPreviewModel(
      this.player.getPtr(),
      this.ptr,
      model
    );
    return result.ret;
  }

  /**
   * @method setPreviewRot
   * @param {number} rx
   * @param {number} ry
   * @param {number} rz
   * @param {number} zoom
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewRot(rx: number, ry: number, rz: number, zoom: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetPreviewRot(
      this.player.getPtr(),
      this.ptr,
      rx,
      ry,
      rz,
      zoom
    );
    return result.ret;
  }

  /**
   * @method setPreviewVehCol
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewVehCol(color1: number, color2: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetPreviewVehCol(
      this.player.getPtr(),
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
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPos(x: number, y: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.SetPos(
      this.player.getPtr(),
      this.ptr,
      x,
      y
    );
    return result.ret;
  }

  /**
   * @method getString
   * @returns {{ret: boolean, text: string}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getString(): { ret: boolean; text: string } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetString(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getLetterSize
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getLetterSize(): { ret: boolean; x: number; y: number } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetLetterSize(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getTextSize
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getTextSize(): { ret: boolean; x: number; y: number } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetTextSize(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPos(): { ret: boolean; x: number; y: number } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetPos(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getColor(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetColor(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getBoxColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getBoxColor(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetBoxColor(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getBackgroundColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getBackgroundColor(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetBackgroundColor(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getShadow
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getShadow(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetShadow(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getOutline
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getOutline(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetOutline(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getFont
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getFont(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetFont(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method isBox
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isBox(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.IsBox(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method isProportional
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isProportional(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.IsProportional(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method isSelectable
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isSelectable(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.IsSelectable(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getAlignment
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getAlignment(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetAlignment(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getPreviewModel
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewModel(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetPreviewModel(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getPreviewRot
   * @returns {{ret: boolean, rx: number,ry: number,rz: number,zoom: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewRot(): {
    ret: boolean;
    rx: number;
    ry: number;
    rz: number;
    zoom: number;
  } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetPreviewRot(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getPreviewVehColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewVehColor(): { ret: boolean; color1: number; color2: number } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = internal_omp.PlayerTextDraw.GetPreviewVehColor(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }
}
