import { PLAYER_MARKERS_MODE, WEAPON } from "src/enums";
import { internal_omp } from "../globals";

/**
 * Core class
 */
export default class Core {
  /**
   * @method tickCount
   * @returns {number}
   */
  static tickCount(): number {
    const result = internal_omp.Core.TickCount();
    return result.ret;
  }

  /**
   * @method maxPlayers
   * @returns {number}
   */
  static maxPlayers(): number {
    const result = internal_omp.Core.MaxPlayers();
    return result.ret;
  }

  /**
   * @method log
   * @param {string} text
   * @returns {boolean}
   */
  static log(text: string): boolean {
    const result = internal_omp.Core.Log(text);
    return result.ret;
  }

  /**
   * @method isAdminTeleportAllowed
   * @returns {boolean}
   */
  static isAdminTeleportAllowed(): boolean {
    const result = internal_omp.Core.IsAdminTeleportAllowed();
    return result.ret;
  }

  /**
   * @method allowAdminTeleport
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowAdminTeleport(allow: boolean): boolean {
    const result = internal_omp.Core.AllowAdminTeleport(allow);
    return result.ret;
  }

  /**
   * @method areAllAnimationsEnabled
   * @returns {boolean}
   */
  static areAllAnimationsEnabled(): boolean {
    const result = internal_omp.Core.AreAllAnimationsEnabled();
    return result.ret;
  }

  /**
   * @method enableAllAnimations
   * @param {boolean} allow
   * @returns {boolean}
   */
  static enableAllAnimations(allow: boolean): boolean {
    const result = internal_omp.Core.EnableAllAnimations(allow);
    return result.ret;
  }

  /**
   * @method isAnimationLibraryValid
   * @param {string} name
   * @returns {boolean}
   */
  static isAnimationLibraryValid(name: string): boolean {
    const result = internal_omp.Core.IsAnimationLibraryValid(name);
    return result.ret;
  }

  /**
   * @method areInteriorWeaponsAllowed
   * @returns {boolean}
   */
  static areInteriorWeaponsAllowed(): boolean {
    const result = internal_omp.Core.AreInteriorWeaponsAllowed();
    return result.ret;
  }

  /**
   * @method allowInteriorWeapons
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowInteriorWeapons(allow: boolean): boolean {
    const result = internal_omp.Core.AllowInteriorWeapons(allow);
    return result.ret;
  }

  /**
   * @method blockIpAddress
   * @param {string} ipAddress
   * @param {number} timeMS
   * @returns {boolean}
   */
  static blockIpAddress(ipAddress: string, timeMS: number): boolean {
    const result = internal_omp.Core.BlockIpAddress(ipAddress, timeMS);
    return result.ret;
  }

  /**
   * @method unBlockIpAddress
   * @param {string} ipAddress
   * @returns {boolean}
   */
  static unBlockIpAddress(ipAddress: string): boolean {
    const result = internal_omp.Core.UnBlockIpAddress(ipAddress);
    return result.ret;
  }

  /**
   * @method disableEntryExitMarkers
   * @returns {boolean}
   */
  static disableEntryExitMarkers(): boolean {
    const result = internal_omp.Core.DisableEntryExitMarkers();
    return result.ret;
  }

  /**
   * @method disableNameTagsLOS
   * @returns {boolean}
   */
  static disableNameTagsLOS(): boolean {
    const result = internal_omp.Core.DisableNameTagsLOS();
    return result.ret;
  }

  /**
   * @method enableZoneNames
   * @param {boolean} enable
   * @returns {boolean}
   */
  static enableZoneNames(enable: boolean): boolean {
    const result = internal_omp.Core.EnableZoneNames(enable);
    return result.ret;
  }

  /**
   * @method showGameTextForAll
   * @param {string} msg
   * @param {number} time
   * @param {number} style
   * @returns {boolean}
   */
  static showGameTextForAll(msg: string, time: number, style: number): boolean {
    const result = internal_omp.Core.ShowGameTextForAll(msg, time, style);
    return result.ret;
  }

  /**
   * @method hideGameTextForAll
   * @param {number} style
   * @returns {boolean}
   */
  static hideGameTextForAll(style: number): boolean {
    const result = internal_omp.Core.HideGameTextForAll(style);
    return result.ret;
  }

  /**
   * @method networkStats
   * @returns {{ret: boolean, output: string}} return object
   */
  static networkStats(): { ret: boolean; output: string } {
    const result = internal_omp.Core.NetworkStats();
    return result;
  }

  /**
   * @method serverTickRate
   * @returns {number}
   */
  static serverTickRate(): number {
    const result = internal_omp.Core.ServerTickRate();
    return result.ret;
  }

  /**
   * @method setChatRadius
   * @param {number} globalChatRadius
   * @returns {boolean}
   */
  static setChatRadius(globalChatRadius: number): boolean {
    const result = internal_omp.Core.SetChatRadius(globalChatRadius);
    return result.ret;
  }

  /**
   * @method setMarkerRadius
   * @param {number} playerMarkerRadius
   * @returns {boolean}
   */
  static setMarkerRadius(playerMarkerRadius: number): boolean {
    const result = internal_omp.Core.SetMarkerRadius(playerMarkerRadius);
    return result.ret;
  }

  /**
   * @method sendRconCommand
   * @param {string} command
   * @returns {boolean}
   */
  static sendRconCommand(command: string): boolean {
    const result = internal_omp.Core.SendRconCommand(command);
    return result.ret;
  }

  /**
   * @method setDeathDropAmount
   * @param {number} amount
   * @returns {boolean}
   */
  static setDeathDropAmount(amount: number): boolean {
    const result = internal_omp.Core.SetDeathDropAmount(amount);
    return result.ret;
  }

  /**
   * @method gameMode_SetText
   * @param {string} string
   * @returns {boolean}
   */
  static gameMode_SetText(string: string): boolean {
    const result = internal_omp.Core.GameMode_SetText(string);
    return result.ret;
  }

  /**
   * @method setGravity
   * @param {number} gravity
   * @returns {boolean}
   */
  static setGravity(gravity: number): boolean {
    const result = internal_omp.Core.SetGravity(gravity);
    return result.ret;
  }

  /**
   * @method getGravity
   * @returns {number}
   */
  static getGravity(): number {
    const result = internal_omp.Core.GetGravity();
    return result.ret;
  }

  /**
   * @method setNameTagsDrawDistance
   * @param {number} distance
   * @returns {boolean}
   */
  static setNameTagsDrawDistance(distance: number): boolean {
    const result = internal_omp.Core.SetNameTagsDrawDistance(distance);
    return result.ret;
  }

  /**
   * @method setWeather
   * @param {number} weatherid
   * @returns {boolean}
   */
  static setWeather(weatherid: number): boolean {
    const result = internal_omp.Core.SetWeather(weatherid);
    return result.ret;
  }

  /**
   * @method setWorldTime
   * @param {number} hour
   * @returns {boolean}
   */
  static setWorldTime(hour: number): boolean {
    const result = internal_omp.Core.SetWorldTime(hour);
    return result.ret;
  }

  /**
   * @method showNameTags
   * @param {boolean} show
   * @returns {boolean}
   */
  static showNameTags(show: boolean): boolean {
    const result = internal_omp.Core.ShowNameTags(show);
    return result.ret;
  }

  /**
   * @method showPlayerMarkers
   * @param {PLAYER_MARKERS_MODE} mode
   * @returns {boolean}
   */
  static showPlayerMarkers(mode: PLAYER_MARKERS_MODE): boolean {
    const result = internal_omp.Core.ShowPlayerMarkers(mode);
    return result.ret;
  }

  /**
   * @method usePedAnims
   * @returns {boolean}
   */
  static usePedAnims(): boolean {
    const result = internal_omp.Core.UsePedAnims();
    return result.ret;
  }

  /**
   * @method getWeather
   * @returns {number}
   */
  static getWeather(): number {
    const result = internal_omp.Core.GetWeather();
    return result.ret;
  }

  /**
   * @method getWorldTime
   * @returns {number}
   */
  static getWorldTime(): number {
    const result = internal_omp.Core.GetWorldTime();
    return result.ret;
  }

  /**
   * @method toggleChatTextReplacement
   * @param {boolean} enable
   * @returns {boolean}
   */
  static toggleChatTextReplacement(enable: boolean): boolean {
    const result = internal_omp.Core.ToggleChatTextReplacement(enable);
    return result.ret;
  }

  /**
   * @method isChatTextReplacementToggled
   * @returns {boolean}
   */
  static isChatTextReplacementToggled(): boolean {
    const result = internal_omp.Core.IsChatTextReplacementToggled();
    return result.ret;
  }

  /**
   * @method isNickNameValid
   * @param {string} name
   * @returns {boolean}
   */
  static isNickNameValid(name: string): boolean {
    const result = internal_omp.Core.IsNickNameValid(name);
    return result.ret;
  }

  /**
   * @method allowNickNameCharacter
   * @param {number} character
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowNickNameCharacter(character: number, allow: boolean): boolean {
    const result = internal_omp.Core.AllowNickNameCharacter(character, allow);
    return result.ret;
  }

  /**
   * @method isNickNameCharacterAllowed
   * @param {number} character
   * @returns {boolean}
   */
  static isNickNameCharacterAllowed(character: number): boolean {
    const result = internal_omp.Core.IsNickNameCharacterAllowed(character);
    return result.ret;
  }

  /**
   * @method clearBanList
   * @returns {boolean}
   */
  static clearBanList(): boolean {
    const result = internal_omp.Core.ClearBanList();
    return result.ret;
  }

  /**
   * @method isIpAddressBanned
   * @param {string} ip
   * @returns {boolean}
   */
  static isIpAddressBanned(ip: string): boolean {
    const result = internal_omp.Core.IsIpAddressBanned(ip);
    return result.ret;
  }

  /**
   * @method getWeaponSlot
   * @param {number} weapon
   * @returns {number}
   */
  static getWeaponSlot(weapon: WEAPON): number {
    const result = internal_omp.Core.GetWeaponSlot(weapon);
    return result.ret;
  }

  /**
   * @method addRule
   * @param {string} name
   * @param {string} value
   * @returns {boolean}
   */
  static addRule(name: string, value: string): boolean {
    const result = internal_omp.Core.AddRule(name, value);
    return result.ret;
  }

  /**
   * @method isValidRule
   * @param {string} name
   * @returns {boolean}
   */
  static isValidRule(name: string): boolean {
    const result = internal_omp.Core.IsValidRule(name);
    return result.ret;
  }

  /**
   * @method removeRule
   * @param {string} name
   * @returns {boolean}
   */
  static removeRule(name: string): boolean {
    const result = internal_omp.Core.RemoveRule(name);
    return result.ret;
  }
}
