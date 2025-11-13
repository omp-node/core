import { Player, Vehicle, omp } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * TextLabel class
 */
export default class TextLabel {
  /**
   * @var ptr
   * @description TextLabel pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description TextLabel ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {string} text
   * @param {number} color
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} drawDistance
   * @param {number} virtualWorld
   * @param {boolean} los
   * @throws Will throw an error if the textLabel creation fails
   */
  constructor(
    text: string,
    color: number,
    x: number,
    y: number,
    z: number,
    drawDistance: number,
    virtualWorld: number,
    los: boolean
  );

  constructor(
    text: string | number,
    color?: number,
    x?: number,
    y?: number,
    z?: number,
    drawDistance?: number,
    virtualWorld?: number,
    los?: boolean
  ) {
    if (arguments.length < 2 && typeof text === "number") {
      const result = internal_omp.TextLabel.FromID(text);
      if (result.ret === 0) {
        throw new Error("Failed to create textlabel");
      }

      this.ptr = PTR(result.ret);
      this.id = text;
      return;
    }

    const result = internal_omp.TextLabel.Create(
      text,
      color,
      x,
      y,
      z,
      drawDistance,
      virtualWorld,
      los
    );
    if (result.ret === 0) {
      throw new Error("Failed to create textLabel");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the textLabel retrieval fails
   */
  destroy(): void {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.Destroy(this.ptr);
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
   * @description get textLabel pointer
   * @returns {number|null} textLabel pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get textLabel id
   * @returns {number|null} textLabel id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method attachToPlayer
   * @param {Player} player
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  attachToPlayer(
    player: Player,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.AttachToPlayer(
      this.ptr,
      player.getPtr(),
      offsetX,
      offsetY,
      offsetZ
    );
    return result.ret;
  }

  /**
   * @method attachToVehicle
   * @param {Vehicle} vehicle
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  attachToVehicle(
    vehicle: Vehicle,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.AttachToVehicle(
      this.ptr,
      vehicle.getPtr(),
      offsetX,
      offsetY,
      offsetZ
    );
    return result.ret;
  }

  /**
   * @method updateText
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  updateText(color: number, text: string): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.UpdateText(this.ptr, color, text);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  isStreamedIn(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.IsStreamedIn(
      player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getText
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getText(): { ret: boolean; output: string } {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetText(this.ptr);
    return result;
  }

  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getColor(): number {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetColor(this.ptr);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getPos(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetPos(this.ptr);
    return result;
  }

  /**
   * @method setDrawDistance
   * @param {number} distance
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setDrawDistance(distance: number): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.SetDrawDistance(this.ptr, distance);
    return result.ret;
  }

  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getDrawDistance(): number {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetDrawDistance(this.ptr);
    return result.ret;
  }

  /**
   * @method getLOS
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  getLOS(): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetLOS(this.ptr);
    return result.ret;
  }

  /**
   * @method setLOS
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setLOS(status: boolean): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.SetLOS(this.ptr, status);
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getVirtualWorld(): number {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetVirtualWorld(this.ptr);
    return result.ret;
  }

  /**
   * @method setVirtualWorld
   * @param {number} world
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setVirtualWorld(world: number): boolean {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.SetVirtualWorld(this.ptr, world);
    return result.ret;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, attached_player: number,attached_vehicle: number}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getAttachedData(): {
    ret: boolean;
    attached_player: Player | undefined;
    attached_vehicle: Vehicle | undefined;
  } {
    if (!this.ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = internal_omp.TextLabel.GetAttachedData(this.ptr);

    const ret: {
      ret: boolean;
      attached_vehicle: Vehicle | undefined;
      attached_player: Player | undefined;
    } = {
      ret: result.ret,
      attached_vehicle: omp.vehicles.get(PTR(result.attached_vehicle)),
      attached_player: omp.players.get(PTR(result.attached_player)),
    };

    return ret;
  }
}
