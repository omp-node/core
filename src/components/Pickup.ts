import { Player } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * Pickup class
 */
export default class Pickup {
  /**
   * @private
   * @var {number|null} Pickup pointer
   */
  private ptr: number | null = null;

  /**
   * @private
   * @var {number|null} Pickup ID
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {number} model
   * @param {number} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} virtualWorld
   * @throws Will throw an error if the pickup creation fails
   */
  constructor(
    model: number,
    type: number,
    x: number,
    y: number,
    z: number,
    virtualWorld: number
  );

  constructor(
    model: number,
    type?: number,
    x?: number,
    y?: number,
    z?: number,
    virtualWorld?: number
  ) {
    if (arguments.length < 2) {
      const result = internal_omp.Pickup.FromID(model);
      if (result.ret === 0) {
        throw new Error("Failed to create pickup");
      }

      this.ptr = PTR(result.ret);
      this.id = model;
      return;
    }

    const result = internal_omp.Pickup.Create(
      model,
      type,
      x,
      y,
      z,
      virtualWorld
    );
    if (result.ret === 0) {
      throw new Error("Failed to create pickup");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the pickup retrieval fails
   */
  destroy(): void {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.Destroy(this.ptr);
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
   * @description get pickup pointer
   * @returns {number|null} pickup pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get pickup id
   * @returns {number|null} pickup id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method addStatic
   * @param {number} model
   * @param {number} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} virtualWorld
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  addStatic(
    model: number,
    type: number,
    x: number,
    y: number,
    z: number,
    virtualWorld: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.AddStatic(
      this.ptr,
      model,
      type,
      x,
      y,
      z,
      virtualWorld
    );
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isStreamedIn(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.IsStreamedIn(player.getPtr(), this.ptr);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the pickup is invalid
   */
  getPos(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.GetPos(this.ptr);
    return result;
  }

  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getModel(): number {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.GetModel(this.ptr);
    return result.ret;
  }

  /**
   * @method getType
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getType(): number {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.GetType(this.ptr);
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getVirtualWorld(): number {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.GetVirtualWorld(this.ptr);
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setPos(x: number, y: number, z: number, update: boolean): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.SetPos(this.ptr, x, y, z, update);
    return result.ret;
  }

  /**
   * @method setModel
   * @param {number} model
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setModel(model: number, update: boolean): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.SetModel(this.ptr, model, update);
    return result.ret;
  }

  /**
   * @method setType
   * @param {number} type
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setType(type: number, update: boolean): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.SetType(this.ptr, type, update);
    return result.ret;
  }

  /**
   * @method setVirtualWorld
   * @param {number} virtualworld
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setVirtualWorld(virtualworld: number): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.SetVirtualWorld(this.ptr, virtualworld);
    return result.ret;
  }

  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  showForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.ShowForPlayer(player.getPtr(), this.ptr);
    return result.ret;
  }

  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  hideForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.HideForPlayer(player.getPtr(), this.ptr);
    return result.ret;
  }

  /**
   * @method isHiddenForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isHiddenForPlayer(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = internal_omp.Pickup.IsHiddenForPlayer(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }
}
