import { Player } from "./index";
import { internal_omp } from "../globals";
import { DIALOG_STYLE } from "src/enums";

/**
 * Dialog class
 */
export default class Dialog {
  /**
   * @method show
   * @param {Player} player
   * @param {number} dialog
   * @param {DIALOG_STYLE} style
   * @param {string} title
   * @param {string} body
   * @param {string} button1
   * @param {string} button2
   * @returns {boolean}
   */
  static show(
    player: Player,
    dialog: number,
    style: DIALOG_STYLE,
    title: string,
    body: string,
    button1: string,
    button2: string
  ): boolean {
    const result = internal_omp.Dialog.Show(
      player.getPtr(),
      dialog,
      style,
      title,
      body,
      button1,
      button2
    );
    return result.ret;
  }

  /**
   * @method hide
   * @param {Player} player
   * @returns {boolean}
   */
  static hide(player: Player): boolean {
    const result = internal_omp.Dialog.Hide(player.getPtr());
    return result.ret;
  }
}
