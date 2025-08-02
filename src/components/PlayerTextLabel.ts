import { Player, Vehicle, omp } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * PlayerTextLabel class
 */
export default class PlayerTextLabel {
  /**
   * @var ptr
   * @description PlayerTextLabel pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description PlayerTextLabel ID
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
   * @param {string} text
   * @param {number} color
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} drawDistance
   * @param {Player} attachedPlayer
   * @param {Vehicle} attachedVehicle
   * @param {boolean} los
   * @throws Will throw an error if the playerTextLabel creation fails
   */
  constructor(
    player: Player,
    text: string,
    color: number,
    x: number,
    y: number,
    z: number,
    drawDistance: number,
    attachedPlayer: Player,
    attachedVehicle: Vehicle,
    los: boolean
  );

  constructor(
    player: Player,
    text: string | number,
    color?: number,
    x?: number,
    y?: number,
    z?: number,
    drawDistance?: number,
    attachedPlayer?: Player,
    attachedVehicle?: Vehicle,
    los?: boolean
  ) {
    if (arguments.length < 3 && typeof text === "number") {
      const result = internal_omp.PlayerTextLabel.FromID(player.getPtr(), text);
      if (result.ret === 0) {
        throw new Error("Failed to create PlayerTextDraw");
      }

      this.ptr = PTR(result.ret);
      this.id = text;
      this.player = player;
      return;
    }

    const result = internal_omp.PlayerTextLabel.Create(
      player.getPtr(),
      text,
      color,
      x,
      y,
      z,
      drawDistance,
      (attachedPlayer as Player).getPtr(),
      (attachedVehicle as Vehicle).getPtr(),
      los
    );
    if (result.ret === 0) {
      throw new Error("Failed to create playerTextLabel");
    }

    this.player = player as Player;
    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerTextLabel retrieval fails
   */
  destroy(): void {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.Destroy(this.player.getPtr(), this.ptr);
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
   * @returns {Player|null} playerTextLabel of current entity
   */
  getPlayer(): Player | null {
    return this.player;
  }

  /**
   * @method getPtr
   * @description get playerTextLabel pointer
   * @returns {number|null} playerTextLabel pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get playerTextLabel id
   * @returns {number|null} playerTextLabel id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method updateText
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  updateText(color: number, text: string): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.UpdateText(
      this.player.getPtr(),
      this.ptr,
      color,
      text
    );
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {{ret: boolean, valid: boolean}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  isValid(): { ret: boolean; valid: boolean } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.IsValid(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getText
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getText(): { ret: boolean; output: string } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetText(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getColor
   * @returns {{ret: boolean, color: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getColor(): { ret: boolean; color: number } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetColor(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getPos(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetPos(
      this.player.getPtr(),
      this.ptr
    );
    return result;
  }

  /**
   * @method setDrawDistance
   * @param {number} distance
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  setDrawDistance(distance: number): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.SetDrawDistance(
      this.player.getPtr(),
      this.ptr,
      distance
    );
    return result.ret;
  }

  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getDrawDistance(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetDrawDistance(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getLOS
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getLOS(): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetLOS(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method setLOS
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  setLOS(status: boolean): boolean {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.SetLOS(
      this.player.getPtr(),
      this.ptr,
      status
    );
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getVirtualWorld(): number {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetVirtualWorld(
      this.player.getPtr(),
      this.ptr
    );
    return result.ret;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, attached_player: number,attached_vehicle: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getAttachedData(): {
    ret: boolean;
    attached_player: Player | undefined;
    attached_vehicle: Vehicle | undefined;
  } {
    if (!this.ptr || !this.player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = internal_omp.PlayerTextLabel.GetAttachedData(
      this.player.getPtr(),
      this.ptr
    );

    const ret: {
      ret: boolean;
      attached_vehicle: Vehicle | undefined;
      attached_player: Player | undefined;
    } = {
      ret: result.ret,
      attached_vehicle: omp.vehicles.get(result.attached_vehicle),
      attached_player: omp.players.get(result.attached_player),
    };

    return ret;
  }
}
