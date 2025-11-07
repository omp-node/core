import { Player } from "./index";
import { internal_omp } from "../globals";
import { CP_TYPE } from "../enums";

/**
 * RaceCheckpoint class
 */
export default class RaceCheckpoint {
  /**
   * @method set
   * @param {Player} player
   * @param {CP_TYPE} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} nextX
   * @param {number} nextY
   * @param {number} nextZ
   * @param {number} radius
   * @returns {boolean}
   */
  static set(
    player: Player,
    type: CP_TYPE,
    x: number,
    y: number,
    z: number,
    nextX: number,
    nextY: number,
    nextZ: number,
    radius: number
  ): boolean {
    const result = internal_omp.RaceCheckpoint.Set(
      player.getPtr(),
      type,
      x,
      y,
      z,
      nextX,
      nextY,
      nextZ,
      radius
    );
    return result.ret;
  }

  /**
   * @method disable
   * @param {Player} player
   * @returns {boolean}
   */
  static disable(player: Player): boolean {
    const result = internal_omp.RaceCheckpoint.Disable(player.getPtr());
    return result.ret;
  }

  /**
   * @method isPlayerIn
   * @param {Player} player
   * @returns {boolean}
   */
  static isPlayerIn(player: Player): boolean {
    const result = internal_omp.RaceCheckpoint.IsPlayerIn(player.getPtr());
    return result.ret;
  }

  /**
   * @method isActive
   * @param {Player} player
   * @returns {boolean}
   */
  static isActive(player: Player): boolean {
    const result = internal_omp.RaceCheckpoint.IsActive(player.getPtr());
    return result.ret;
  }

  /**
   * @method get
   * @param {Player} player
   * @returns {{ret: boolean, x: number,y: number,z: number,nextX: number,nextY: number,nextZ: number,radius: number}} return object
   */
  static get(player: Player): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    nextX: number;
    nextY: number;
    nextZ: number;
    radius: number;
  } {
    const result = internal_omp.RaceCheckpoint.Get(player.getPtr());
    return result;
  }
}
