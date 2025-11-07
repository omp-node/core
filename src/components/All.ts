import { Player } from "./index";
import { internal_omp } from "../globals";
import { WEAPON } from "../enums";

/**
 * All class
 */
export default class All {
  /**
   * @method sendClientMessage
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   */
  static sendClientMessage(color: number, text: string): boolean {
    const result = internal_omp.All.SendClientMessage(color, text);
    return result.ret;
  }

  /**
   * @method createExplosion
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} type
   * @param {number} radius
   * @returns {boolean}
   */
  static createExplosion(
    x: number,
    y: number,
    z: number,
    type: number,
    radius: number
  ): boolean {
    const result = internal_omp.All.CreateExplosion(x, y, z, type, radius);
    return result.ret;
  }

  /**
   * @method sendDeathMessage
   * @param {Player} killer
   * @param {Player} killee
   * @param {number} weapon
   * @returns {boolean}
   */
  static sendDeathMessage(
    killer: Player,
    killee: Player,
    weapon: WEAPON
  ): boolean {
    const result = internal_omp.All.SendDeathMessage(
      killer.getPtr(),
      killee.getPtr(),
      weapon
    );
    return result.ret;
  }

  /**
   * @method enableStuntBonus
   * @param {boolean} enable
   * @returns {boolean}
   */
  static enableStuntBonus(enable: boolean): boolean {
    const result = internal_omp.All.EnableStuntBonus(enable);
    return result.ret;
  }
}
