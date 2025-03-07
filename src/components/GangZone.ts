import { Player } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * GangZone class
 */
export default class GangZone {
  /**
   * @var ptr
   * @description GangZone pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description GangZone ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {number} minx
   * @param {number} miny
   * @param {number} maxx
   * @param {number} maxy
   * @throws Will throw an error if the gangZone creation fails
   */
  constructor(minx: number, miny: number, maxx: number, maxy: number);

  constructor(minx: number, miny?: number, maxx?: number, maxy?: number) {
    if (arguments.length < 2) {
      const result = internal_omp.GangZone.FromID(minx);
      if (result.ret === 0) {
        throw new Error("Failed to create gangzone");
      }

      this.ptr = PTR(result.ret);
      this.id = minx;
      return;
    }

    const result = internal_omp.GangZone.Create(minx, miny, maxx, maxy);
    if (result.ret === 0) {
      throw new Error("Failed to create gangZone");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the gangZone retrieval fails
   */
  destroy(): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.Destroy(this.ptr);
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
   * @description get gangZone pointer
   * @returns {number|null} gangZone pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get gangZone id
   * @returns {number|null} gangZone id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method showForPlayer
   * @param {Player} player
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  showForPlayer(player: Player, color: number): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.ShowForPlayer(
      player.getPtr(),
      this.ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method showForAll
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  showForAll(color: number): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.ShowForAll(this.ptr, color);
    return result.ret;
  }

  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  hideForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.HideForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method hideForAll
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  hideForAll(): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.HideForAll(this.ptr);
    return result.ret;
  }

  /**
   * @method flashForPlayer
   * @param {Player} player
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  flashForPlayer(player: Player, color: number): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.FlashForPlayer(
      player.getPtr(),
      this.ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method flashForAll
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  flashForAll(color: number): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.FlashForAll(this.ptr, color);
    return result.ret;
  }

  /**
   * @method stopFlashForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  stopFlashForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.StopFlashForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method stopFlashForAll
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  stopFlashForAll(): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.StopFlashForAll(this.ptr);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method isPlayerIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isPlayerIn(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.IsPlayerIn(player.getPtr(), this.ptr);
    return result.ret;
  }

  /**
   * @method isVisibleForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isVisibleForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.IsVisibleForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getColorForPlayer
   * @param {Player} player
   * @returns {number}
   * @throws Will throw an error if the gangZone is invalid
   */
  getColorForPlayer(player: Player): number {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.GetColorForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getFlashColorForPlayer
   * @param {Player} player
   * @returns {number}
   * @throws Will throw an error if the gangZone is invalid
   */
  getFlashColorForPlayer(player: Player): number {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.GetFlashColorForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method isFlashingForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isFlashingForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.IsFlashingForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, minx: number,miny: number,maxx: number,maxy: number}} return object
   * @throws Will throw an error if the gangZone is invalid
   */
  getPos(): {
    ret: boolean;
    minx: number;
    miny: number;
    maxx: number;
    maxy: number;
  } {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.GetPos(this.ptr);
    return result;
  }

  /**
   * @method useCheck
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  useCheck(enable: boolean): boolean {
    if (!this.ptr) {
      throw new Error("GangZone instance is not valid");
    }

    const result = internal_omp.GangZone.UseCheck(this.ptr, enable);
    return result.ret;
  }
}
