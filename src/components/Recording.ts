import { Player } from "./index";
import { internal_omp } from "../globals";
import { PLAYER_RECORDING_TYPE } from "src/enums";

/**
 * Recording class
 */
export default class Recording {
  /**
   * @method start
   * @param {Player} player
   * @param {PLAYER_RECORDING_TYPE} type
   * @param {string} file
   * @returns {boolean}
   */
  static start(player: Player, type: PLAYER_RECORDING_TYPE, file: string): boolean {
    const result = internal_omp.Recording.Start(player.getPtr(), type, file);
    return result.ret;
  }

  /**
   * @method stop
   * @param {Player} player
   * @returns {boolean}
   */
  static stop(player: Player): boolean {
    const result = internal_omp.Recording.Stop(player.getPtr());
    return result.ret;
  }
}
