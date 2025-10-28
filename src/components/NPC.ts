import { Player, Vehicle, ObjectMp, omp, PlayerObject } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * NPC class
 */
export default class NPC {
  /**
   * @var ptr
   * @description NPC pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description NPC ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {string} name
   * @throws Will throw an error if the NPC creation fails
   */
  constructor(name: string);

  /**
   * @constructor
   * @param {string} name
   * @throws Will throw an error if the NPC creation fails
   */
  constructor(name: string) {
    if (typeof name === "number") {
      const result = internal_omp.Menu.FromID(name);
      if (result.ret === 0) {
        throw new Error("Failed to create NPC");
      }

      this.ptr = PTR(result.ret);
      this.id = name;
      return;
    }

    const result = internal_omp.NPC.Create(name);
    if (result.ret === 0) {
      throw new Error("Failed to create NPC");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the NPC retrieval fails
   */
  destroy(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.Actor.Destroy(this.ptr);
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
   * @description get NPC pointer
   * @returns {number|null} NPC pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get NPC id
   * @returns {number|null} NPC id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method getPlayer
   * @returns {Player}
   * @throws Will throw an error if the NPC is invalid
   */
  getPlayer(): Player | undefined {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetPlayer(this.ptr);
    return omp.players.get(result.ret);
  }

  /**
   * @method spawn
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  spawn(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.Spawn(this.ptr);
    return result.ret;
  }

  /**
   * @method respawn
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  respawn(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.Respawn(this.ptr);
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setPos(x: number, y: number, z: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetPos(this.ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  getPos(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetPos(this.ptr);
    return result;
  }

  /**
   * @method setRot
   * @param {number} rx
   * @param {number} ry
   * @param {number} rz
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setRot(rx: number, ry: number, rz: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetRot(this.ptr, rx, ry, rz);
    return result.ret;
  }

  /**
   * @method getRot
   * @returns {{ret: boolean, rx: number,ry: number,rz: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  getRot(): { ret: boolean; rx: number; ry: number; rz: number } {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetRot(this.ptr);
    return result;
  }

  /**
   * @method setFacingAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setFacingAngle(angle: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetFacingAngle(this.ptr, angle);
    return result.ret;
  }

  /**
   * @method getFacingAngle
   * @returns {{ret: boolean, angle: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  getFacingAngle(): { ret: boolean; angle: number } {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetFacingAngle(this.ptr);
    return result;
  }

  /**
   * @method setVirtualWorld
   * @param {number} virtualWorld
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setVirtualWorld(virtualWorld: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetVirtualWorld(this.ptr, virtualWorld);
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVirtualWorld(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVirtualWorld(this.ptr);
    return result.ret;
  }

  /**
   * @method setInterior
   * @param {number} interior
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setInterior(interior: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetInterior(this.ptr, interior);
    return result.ret;
  }

  /**
   * @method getInterior
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getInterior(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetInterior(this.ptr);
    return result.ret;
  }

  /**
   * @method move
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} moveType
   * @param {number} moveSpeed
   * @param {number} stopRange
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  move(
    x: number,
    y: number,
    z: number,
    moveType: number,
    moveSpeed: number,
    stopRange: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.Move(
      this.ptr,
      x,
      y,
      z,
      moveType,
      moveSpeed,
      stopRange
    );
    return result.ret;
  }

  /**
   * @method moveToPlayer
   * @param {Player} player
   * @param {number} moveType
   * @param {number} moveSpeed
   * @param {number} stopRange
   * @param {number} posCheckUpdateDelay
   * @param {boolean} autoRestart
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  moveToPlayer(
    player: Player,
    moveType: number,
    moveSpeed: number,
    stopRange: number,
    posCheckUpdateDelay: number,
    autoRestart: boolean
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.MoveToPlayer(
      this.ptr,
      player.getPtr(),
      moveType,
      moveSpeed,
      stopRange,
      posCheckUpdateDelay,
      autoRestart
    );
    return result.ret;
  }

  /**
   * @method stopMove
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  stopMove(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StopMove(this.ptr);
    return result.ret;
  }

  /**
   * @method isMoving
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isMoving(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsMoving(this.ptr);
    return result.ret;
  }

  /**
   * @method setSkin
   * @param {number} model
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setSkin(model: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetSkin(this.ptr, model);
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isStreamedIn(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsStreamedIn(this.ptr, player.getPtr());
    return result.ret;
  }

  /**
   * @method isAnyStreamedIn
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isAnyStreamedIn(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsAnyStreamedIn(this.ptr);
    return result.ret;
  }

  /**
   * @method getAll
   * @param {number} maxNPCs
   * @returns {{ret: boolean, npcsArr: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  getAll(maxNPCs: number): { ret: boolean; npcsArr: number } {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetAll(this.ptr, maxNPCs);
    return result;
  }

  /**
   * @method setHealth
   * @param {number} health
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setHealth(health: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetHealth(this.ptr, health);
    return result.ret;
  }

  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getHealth(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetHealth(this.ptr);
    return result.ret;
  }

  /**
   * @method setArmour
   * @param {number} armour
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setArmour(armour: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetArmour(this.ptr, armour);
    return result.ret;
  }

  /**
   * @method getArmour
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getArmour(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetArmour(this.ptr);
    return result.ret;
  }

  /**
   * @method isDead
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isDead(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsDead(this.ptr);
    return result.ret;
  }

  /**
   * @method setInvulnerable
   * @param {boolean} toggle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setInvulnerable(toggle: boolean): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetInvulnerable(this.ptr, toggle);
    return result.ret;
  }

  /**
   * @method isInvulnerable
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isInvulnerable(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsInvulnerable(this.ptr);
    return result.ret;
  }

  /**
   * @method setWeapon
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setWeapon(weapon: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetWeapon(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method getWeapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeapon(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeapon(this.ptr);
    return result.ret;
  }

  /**
   * @method setAmmo
   * @param {number} ammo
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setAmmo(ammo: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetAmmo(this.ptr, ammo);
    return result.ret;
  }

  /**
   * @method getAmmo
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getAmmo(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetAmmo(this.ptr);
    return result.ret;
  }

  /**
   * @method setAmmoInClip
   * @param {number} ammo
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setAmmoInClip(ammo: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetAmmoInClip(this.ptr, ammo);
    return result.ret;
  }

  /**
   * @method getAmmoInClip
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getAmmoInClip(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetAmmoInClip(this.ptr);
    return result.ret;
  }

  /**
   * @method enableReloading
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  enableReloading(enable: boolean): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.EnableReloading(this.ptr, enable);
    return result.ret;
  }

  /**
   * @method isReloadEnabled
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isReloadEnabled(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsReloadEnabled(this.ptr);
    return result.ret;
  }

  /**
   * @method isReloading
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isReloading(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsReloading(this.ptr);
    return result.ret;
  }

  /**
   * @method enableInfiniteAmmo
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  enableInfiniteAmmo(enable: boolean): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.EnableInfiniteAmmo(this.ptr, enable);
    return result.ret;
  }

  /**
   * @method isInfiniteAmmoEnabled
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isInfiniteAmmoEnabled(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsInfiniteAmmoEnabled(this.ptr);
    return result.ret;
  }

  /**
   * @method getWeaponState
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponState(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponState(this.ptr);
    return result.ret;
  }

  /**
   * @method setKeys
   * @param {uint16_t} upAndDown
   * @param {uint16_t} leftAndRight
   * @param {uint16_t} keys
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setKeys(upAndDown: number, leftAndRight: number, keys: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetKeys(
      this.ptr,
      upAndDown,
      leftAndRight,
      keys
    );
    return result.ret;
  }

  /**
   * @method getKeys
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  getKeys(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetKeys(this.ptr);
    return result.ret;
  }

  /**
   * @method setWeaponSkillLevel
   * @param {number} skill
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setWeaponSkillLevel(skill: number, level: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetWeaponSkillLevel(this.ptr, skill, level);
    return result.ret;
  }

  /**
   * @method getWeaponSkillLevel
   * @param {number} skill
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponSkillLevel(skill: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponSkillLevel(this.ptr, skill);
    return result.ret;
  }

  /**
   * @method meleeAttack
   * @param {number} time
   * @param {boolean} secondaryAttack
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  meleeAttack(time: number, secondaryAttack: boolean): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.MeleeAttack(
      this.ptr,
      time,
      secondaryAttack
    );
    return result.ret;
  }

  /**
   * @method stopMeleeAttack
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  stopMeleeAttack(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StopMeleeAttack(this.ptr);
    return result.ret;
  }

  /**
   * @method isMeleeAttacking
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isMeleeAttacking(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsMeleeAttacking(this.ptr);
    return result.ret;
  }

  /**
   * @method setFightingStyle
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setFightingStyle(style: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetFightingStyle(this.ptr, style);
    return result.ret;
  }

  /**
   * @method getFightingStyle
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getFightingStyle(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetFightingStyle(this.ptr);
    return result.ret;
  }

  /**
   * @method shoot
   * @param {number} weapon
   * @param {number} hitId
   * @param {number} hitType
   * @param {number} endX
   * @param {number} endY
   * @param {number} endZ
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {boolean} isHit
   * @param {number} checkInBetweenFlags
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  shoot(
    weapon: number,
    hitId: number,
    hitType: number,
    endX: number,
    endY: number,
    endZ: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    isHit: boolean,
    checkInBetweenFlags: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.Shoot(
      this.ptr,
      weapon,
      hitId,
      hitType,
      endX,
      endY,
      endZ,
      offsetX,
      offsetY,
      offsetZ,
      isHit,
      checkInBetweenFlags
    );
    return result.ret;
  }

  /**
   * @method isShooting
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isShooting(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsShooting(this.ptr);
    return result.ret;
  }

  /**
   * @method aimAt
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {boolean} shoot
   * @param {number} shootDelay
   * @param {boolean} updateAngle
   * @param {number} offsetFromX
   * @param {number} offsetFromY
   * @param {number} offsetFromZ
   * @param {number} checkInBetweenFlags
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  aimAt(
    x: number,
    y: number,
    z: number,
    shoot: boolean,
    shootDelay: number,
    updateAngle: boolean,
    offsetFromX: number,
    offsetFromY: number,
    offsetFromZ: number,
    checkInBetweenFlags: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.AimAt(
      this.ptr,
      x,
      y,
      z,
      shoot,
      shootDelay,
      updateAngle,
      offsetFromX,
      offsetFromY,
      offsetFromZ,
      checkInBetweenFlags
    );
    return result.ret;
  }

  /**
   * @method aimAtPlayer
   * @param {Player} atPlayer
   * @param {boolean} shoot
   * @param {number} shootDelay
   * @param {boolean} updateAngle
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} offsetFromX
   * @param {number} offsetFromY
   * @param {number} offsetFromZ
   * @param {number} checkInBetweenFlags
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  aimAtPlayer(
    atPlayer: Player,
    shoot: boolean,
    shootDelay: number,
    updateAngle: boolean,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    offsetFromX: number,
    offsetFromY: number,
    offsetFromZ: number,
    checkInBetweenFlags: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.AimAtPlayer(
      this.ptr,
      atPlayer.getPtr(),
      shoot,
      shootDelay,
      updateAngle,
      offsetX,
      offsetY,
      offsetZ,
      offsetFromX,
      offsetFromY,
      offsetFromZ,
      checkInBetweenFlags
    );
    return result.ret;
  }

  /**
   * @method stopAim
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  stopAim(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StopAim(this.ptr);
    return result.ret;
  }

  /**
   * @method isAiming
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isAiming(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsAiming(this.ptr);
    return result.ret;
  }

  /**
   * @method isAimingAtPlayer
   * @param {Player} atPlayer
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isAimingAtPlayer(atPlayer: Player): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsAimingAtPlayer(
      this.ptr,
      atPlayer.getPtr()
    );
    return result.ret;
  }

  /**
   * @method setWeaponAccuracy
   * @param {number} weapon
   * @param {number} accuracy
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setWeaponAccuracy(weapon: number, accuracy: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetWeaponAccuracy(
      this.ptr,
      weapon,
      accuracy
    );
    return result.ret;
  }

  /**
   * @method getWeaponAccuracy
   * @param {number} weapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponAccuracy(weapon: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponAccuracy(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method setWeaponReloadTime
   * @param {number} weapon
   * @param {number} time
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setWeaponReloadTime(weapon: number, time: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetWeaponReloadTime(this.ptr, weapon, time);
    return result.ret;
  }

  /**
   * @method getWeaponReloadTime
   * @param {number} weapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponReloadTime(weapon: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponReloadTime(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method getWeaponActualReloadTime
   * @param {number} weapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponActualReloadTime(weapon: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponActualReloadTime(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method setWeaponShootTime
   * @param {number} weapon
   * @param {number} time
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setWeaponShootTime(weapon: number, time: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetWeaponShootTime(this.ptr, weapon, time);
    return result.ret;
  }

  /**
   * @method getWeaponShootTime
   * @param {number} weapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponShootTime(weapon: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponShootTime(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method setWeaponClipSize
   * @param {number} weapon
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setWeaponClipSize(weapon: number, size: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetWeaponClipSize(this.ptr, weapon, size);
    return result.ret;
  }

  /**
   * @method getWeaponClipSize
   * @param {number} weapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponClipSize(weapon: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponClipSize(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method getWeaponActualClipSize
   * @param {number} weapon
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getWeaponActualClipSize(weapon: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetWeaponActualClipSize(this.ptr, weapon);
    return result.ret;
  }

  /**
   * @method enterVehicle
   * @param {Vehicle} vehicle
   * @param {number} seatId
   * @param {number} moveType
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  enterVehicle(vehicle: Vehicle, seatId: number, moveType: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.EnterVehicle(
      this.ptr,
      vehicle.getPtr(),
      seatId,
      moveType
    );
    return result.ret;
  }

  /**
   * @method exitVehicle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  exitVehicle(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ExitVehicle(this.ptr);
    return result.ret;
  }

  /**
   * @method putInVehicle
   * @param {Vehicle} vehicle
   * @param {number} seatId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  putInVehicle(vehicle: Vehicle, seatId: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.PutInVehicle(
      this.ptr,
      vehicle.getPtr(),
      seatId
    );
    return result.ret;
  }

  /**
   * @method removeFromVehicle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  removeFromVehicle(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.RemoveFromVehicle(this.ptr);
    return result.ret;
  }

  /**
   * @method getVehicle
   * @returns {Vehicle | undefined}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicle(): Vehicle | undefined {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicle(this.ptr);
    return omp.vehicles.get(result.ret);
  }

  /**
   * @method getVehicleID
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicleID(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicleID(this.ptr);
    return result.ret;
  }

  /**
   * @method getEnteringVehicle
   * @returns {Vehicle | undefined}
   * @throws Will throw an error if the NPC is invalid
   */
  getEnteringVehicle(): Vehicle | undefined {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetEnteringVehicle(this.ptr);
    return omp.vehicles.get(result.ret);
  }

  /**
   * @method getEnteringVehicleID
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getEnteringVehicleID(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetEnteringVehicleID(this.ptr);
    return result.ret;
  }

  /**
   * @method getVehicleSeat
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicleSeat(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicleSeat(this.ptr);
    return result.ret;
  }

  /**
   * @method getEnteringVehicleSeat
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getEnteringVehicleSeat(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetEnteringVehicleSeat(this.ptr);
    return result.ret;
  }

  /**
   * @method isEnteringVehicle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isEnteringVehicle(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsEnteringVehicle(this.ptr);
    return result.ret;
  }

  /**
   * @method useVehicleSiren
   * @param {boolean} use
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  useVehicleSiren(use: boolean): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.UseVehicleSiren(this.ptr, use);
    return result.ret;
  }

  /**
   * @method isVehicleSirenUsed
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isVehicleSirenUsed(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsVehicleSirenUsed(this.ptr);
    return result.ret;
  }

  /**
   * @method setVehicleHealth
   * @param {number} health
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setVehicleHealth(health: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetVehicleHealth(this.ptr, health);
    return result.ret;
  }

  /**
   * @method getVehicleHealth
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicleHealth(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicleHealth(this.ptr);
    return result.ret;
  }

  /**
   * @method setVehicleHydraThrusters
   * @param {number} direction
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setVehicleHydraThrusters(direction: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetVehicleHydraThrusters(
      this.ptr,
      direction
    );
    return result.ret;
  }

  /**
   * @method getVehicleHydraThrusters
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicleHydraThrusters(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicleHydraThrusters(this.ptr);
    return result.ret;
  }

  /**
   * @method setVehicleGearState
   * @param {number} gearState
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setVehicleGearState(gearState: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetVehicleGearState(this.ptr, gearState);
    return result.ret;
  }

  /**
   * @method getVehicleGearState
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicleGearState(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicleGearState(this.ptr);
    return result.ret;
  }

  /**
   * @method setVehicleTrainSpeed
   * @param {number} speed
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setVehicleTrainSpeed(speed: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetVehicleTrainSpeed(this.ptr, speed);
    return result.ret;
  }

  /**
   * @method getVehicleTrainSpeed
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getVehicleTrainSpeed(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetVehicleTrainSpeed(this.ptr);
    return result.ret;
  }

  /**
   * @method getCurrentPathPointIndex
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getCurrentPathPointIndex(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetCurrentPathPointIndex(this.ptr);
    return result.ret;
  }

  /**
   * @method moveByPath
   * @param {number} pathId
   * @param {number} moveType
   * @param {number} moveSpeed
   * @param {boolean} reverse
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  moveByPath(
    pathId: number,
    moveType: number,
    moveSpeed: number,
    reverse: boolean
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.MoveByPath(
      this.ptr,
      pathId,
      moveType,
      moveSpeed,
      reverse
    );
    return result.ret;
  }

  /**
   * @method resetAnimation
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  resetAnimation(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ResetAnimation(this.ptr);
    return result.ret;
  }

  /**
   * @method setAnimation
   * @param {number} animationId
   * @param {number} delta
   * @param {boolean} loop
   * @param {boolean} lockX
   * @param {boolean} lockY
   * @param {boolean} freeze
   * @param {number} time
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setAnimation(
    animationId: number,
    delta: number,
    loop: boolean,
    lockX: boolean,
    lockY: boolean,
    freeze: boolean,
    time: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetAnimation(
      this.ptr,
      animationId,
      delta,
      loop,
      lockX,
      lockY,
      freeze,
      time
    );
    return result.ret;
  }

  /**
   * @method getAnimation
   * @returns {{ret: boolean, animationId: number,delta: number,loop: boolean,lockX: boolean,lockY: boolean,freeze: boolean,time: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  getAnimation(): {
    ret: boolean;
    animationId: number;
    delta: number;
    loop: boolean;
    lockX: boolean;
    lockY: boolean;
    freeze: boolean;
    time: number;
  } {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetAnimation(this.ptr);
    return result;
  }

  /**
   * @method applyAnimation
   * @param {string} animlib
   * @param {string} animname
   * @param {number} delta
   * @param {boolean} loop
   * @param {boolean} lockX
   * @param {boolean} lockY
   * @param {boolean} freeze
   * @param {number} time
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  applyAnimation(
    animlib: string,
    animname: string,
    delta: number,
    loop: boolean,
    lockX: boolean,
    lockY: boolean,
    freeze: boolean,
    time: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ApplyAnimation(
      this.ptr,
      animlib,
      animname,
      delta,
      loop,
      lockX,
      lockY,
      freeze,
      time
    );
    return result.ret;
  }

  /**
   * @method clearAnimations
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  clearAnimations(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ClearAnimations(this.ptr);
    return result.ret;
  }

  /**
   * @method setSpecialAction
   * @param {number} action
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setSpecialAction(action: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetSpecialAction(this.ptr, action);
    return result.ret;
  }

  /**
   * @method getSpecialAction
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  getSpecialAction(): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetSpecialAction(this.ptr);
    return result.ret;
  }

  /**
   * @method startPlayback
   * @param {string} recordName
   * @param {boolean} autoUnload
   * @param {number} startPosX
   * @param {number} startPosY
   * @param {number} startPosZ
   * @param {number} startRotX
   * @param {number} startRotY
   * @param {number} startRotZ
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  startPlayback(
    recordName: string,
    autoUnload: boolean,
    startPosX: number,
    startPosY: number,
    startPosZ: number,
    startRotX: number,
    startRotY: number,
    startRotZ: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StartPlayback(
      this.ptr,
      recordName,
      autoUnload,
      startPosX,
      startPosY,
      startPosZ,
      startRotX,
      startRotY,
      startRotZ
    );
    return result.ret;
  }

  /**
   * @method startPlaybackEx
   * @param {number} recordId
   * @param {boolean} autoUnload
   * @param {number} startPosX
   * @param {number} startPosY
   * @param {number} startPosZ
   * @param {number} startRotX
   * @param {number} startRotY
   * @param {number} startRotZ
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  startPlaybackEx(
    recordId: number,
    autoUnload: boolean,
    startPosX: number,
    startPosY: number,
    startPosZ: number,
    startRotX: number,
    startRotY: number,
    startRotZ: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StartPlaybackEx(
      this.ptr,
      recordId,
      autoUnload,
      startPosX,
      startPosY,
      startPosZ,
      startRotX,
      startRotY,
      startRotZ
    );
    return result.ret;
  }

  /**
   * @method stopPlayback
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  stopPlayback(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StopPlayback(this.ptr);
    return result.ret;
  }

  /**
   * @method pausePlayback
   * @param {boolean} paused
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  pausePlayback(paused: boolean): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.PausePlayback(this.ptr, paused);
    return result.ret;
  }

  /**
   * @method isPlayingPlayback
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isPlayingPlayback(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsPlayingPlayback(this.ptr);
    return result.ret;
  }

  /**
   * @method isPlaybackPaused
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isPlaybackPaused(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsPlaybackPaused(this.ptr);
    return result.ret;
  }

  /**
   * @method playNode
   * @param {number} nodeId
   * @param {number} moveType
   * @param {number} moveSpeed
   * @param {number} radius
   * @param {boolean} setAngle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  playNode(
    nodeId: number,
    moveType: number,
    moveSpeed: number,
    radius: number,
    setAngle: boolean
  ): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.PlayNode(
      this.ptr,
      nodeId,
      moveType,
      moveSpeed,
      radius,
      setAngle
    );
    return result.ret;
  }

  /**
   * @method stopPlayingNode
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  stopPlayingNode(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.StopPlayingNode(this.ptr);
    return result.ret;
  }

  /**
   * @method pausePlayingNode
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  pausePlayingNode(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.PausePlayingNode(this.ptr);
    return result.ret;
  }

  /**
   * @method resumePlayingNode
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  resumePlayingNode(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ResumePlayingNode(this.ptr);
    return result.ret;
  }

  /**
   * @method isPlayingNodePaused
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isPlayingNodePaused(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsPlayingNodePaused(this.ptr);
    return result.ret;
  }

  /**
   * @method isPlayingNode
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  isPlayingNode(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.IsPlayingNode(this.ptr);
    return result.ret;
  }

  /**
   * @method changeNode
   * @param {number} nodeId
   * @param {number} linkId
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  changeNode(nodeId: number, linkId: number): number {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ChangeNode(this.ptr, nodeId, linkId);
    return result.ret;
  }

  /**
   * @method updateNodePoint
   * @param {number} pointId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  updateNodePoint(pointId: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.UpdateNodePoint(this.ptr, pointId);
    return result.ret;
  }

  /**
   * @method setSurfingOffset
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setSurfingOffset(x: number, y: number, z: number): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetSurfingOffset(this.ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getSurfingOffset
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  getSurfingOffset(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetSurfingOffset(this.ptr);
    return result;
  }

  /**
   * @method setSurfingVehicle
   * @param {Vehicle} vehicle
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setSurfingVehicle(vehicle: Vehicle): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetSurfingVehicle(
      this.ptr,
      vehicle.getPtr()
    );
    return result.ret;
  }

  /**
   * @method getSurfingVehicle
   * @returns {Vehicle | undefined}
   * @throws Will throw an error if the NPC is invalid
   */
  getSurfingVehicle(): Vehicle | undefined {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetSurfingVehicle(this.ptr);
    return omp.vehicles.get(result.ret);
  }

  /**
   * @method setSurfingObject
   * @param {ObjectMp} object
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setSurfingObject(object: ObjectMp): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    if (!object || !object.getPtr()) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.NPC.SetSurfingObject(this.ptr, object.getPtr());
    return result.ret;
  }

  /**
   * @method getSurfingObject
   * @returns {ObjectMp | undefined}
   * @throws Will throw an error if the NPC is invalid
   */
  getSurfingObject(): ObjectMp | undefined {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.GetSurfingObject(this.ptr);
    return omp.objects.get(result.ret);
  }

  /**
   * @method setSurfingPlayerObject
   * @param {Player} player
   * @param {number} objectId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  setSurfingPlayerObject(player: Player, object: PlayerObject): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.SetSurfingPlayerObject(
      this.ptr,
      player.getPtr(),
      object.getPtr()
    );
    return result.ret;
  }

  /**
   * @method resetSurfingData
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  resetSurfingData(): boolean {
    if (!this.ptr) {
      throw new Error("NPC instance is not valid");
    }

    const result = internal_omp.NPC.ResetSurfingData(this.ptr);
    return result.ret;
  }

  /**
   * @method createPath
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static createPath(): number {
    const result = internal_omp.NPC.CreatePath();
    return result.ret;
  }

  /**
   * @method destroyPath
   * @param {number} pathId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static destroyPath(pathId: number): boolean {
    const result = internal_omp.NPC.DestroyPath(pathId);
    return result.ret;
  }

  /**
   * @method destroyAllPath
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static destroyAllPath(): boolean {
    const result = internal_omp.NPC.DestroyAllPath();
    return result.ret;
  }

  /**
   * @method getPathCount
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static getPathCount(): number {
    const result = internal_omp.NPC.GetPathCount();
    return result.ret;
  }

  /**
   * @method addPointToPath
   * @param {number} pathId
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} stopRange
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static addPointToPath(
    pathId: number,
    x: number,
    y: number,
    z: number,
    stopRange: number
  ): boolean {
    const result = internal_omp.NPC.AddPointToPath(pathId, x, y, z, stopRange);
    return result.ret;
  }

  /**
   * @method removePointFromPath
   * @param {number} pathId
   * @param {number} pointIndex
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static removePointFromPath(pathId: number, pointIndex: number): boolean {
    const result = internal_omp.NPC.RemovePointFromPath(pathId, pointIndex);
    return result.ret;
  }

  /**
   * @method clearPath
   * @param {number} pathId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static clearPath(pathId: number): boolean {
    const result = internal_omp.NPC.ClearPath(pathId);
    return result.ret;
  }

  /**
   * @method getPathPointCount
   * @param {number} pathId
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static getPathPointCount(pathId: number): number {
    const result = internal_omp.NPC.GetPathPointCount(pathId);
    return result.ret;
  }

  /**
   * @method getPathPoint
   * @param {number} pathId
   * @param {number} pointIndex
   * @returns {{ret: boolean, x: number,y: number,z: number,stopRange: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  static getPathPoint(
    pathId: number,
    pointIndex: number
  ): { ret: boolean; x: number; y: number; z: number; stopRange: number } {
    const result = internal_omp.NPC.GetPathPoint(pathId, pointIndex);
    return result;
  }

  /**
   * @method isValidPath
   * @param {number} pathId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static isValidPath(pathId: number): boolean {
    const result = internal_omp.NPC.IsValidPath(pathId);
    return result.ret;
  }

  /**
   * @method hasPathPointInRange
   * @param {number} pathId
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} radius
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static hasPathPointInRange(
    pathId: number,
    x: number,
    y: number,
    z: number,
    radius: number
  ): boolean {
    const result = internal_omp.NPC.HasPathPointInRange(
      pathId,
      x,
      y,
      z,
      radius
    );
    return result.ret;
  }

  /**
   * @method loadRecord
   * @param {string} filePath
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static loadRecord(filePath: string): number {
    const result = internal_omp.NPC.LoadRecord(filePath);
    return result.ret;
  }

  /**
   * @method unloadRecord
   * @param {number} recordId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static unloadRecord(recordId: number): boolean {
    const result = internal_omp.NPC.UnloadRecord(recordId);
    return result.ret;
  }

  /**
   * @method isValidRecord
   * @param {number} recordId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static isValidRecord(recordId: number): boolean {
    const result = internal_omp.NPC.IsValidRecord(recordId);
    return result.ret;
  }

  /**
   * @method getRecordCount
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static getRecordCount(): number {
    const result = internal_omp.NPC.GetRecordCount();
    return result.ret;
  }

  /**
   * @method unloadAllRecords
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static unloadAllRecords(): boolean {
    const result = internal_omp.NPC.UnloadAllRecords();
    return result.ret;
  }

  /**
   * @method openNode
   * @param {number} nodeId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static openNode(nodeId: number): boolean {
    const result = internal_omp.NPC.OpenNode(nodeId);
    return result.ret;
  }

  /**
   * @method closeNode
   * @param {number} nodeId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static closeNode(nodeId: number): boolean {
    const result = internal_omp.NPC.CloseNode(nodeId);
    return result.ret;
  }

  /**
   * @method isNodeOpen
   * @param {number} nodeId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static isNodeOpen(nodeId: number): boolean {
    const result = internal_omp.NPC.IsNodeOpen(nodeId);
    return result.ret;
  }

  /**
   * @method getNodeType
   * @param {number} nodeId
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static getNodeType(nodeId: number): number {
    const result = internal_omp.NPC.GetNodeType(nodeId);
    return result.ret;
  }

  /**
   * @method setNodePoint
   * @param {number} nodeId
   * @param {number} pointId
   * @returns {boolean}
   * @throws Will throw an error if the NPC is invalid
   */
  static setNodePoint(nodeId: number, pointId: number): boolean {
    const result = internal_omp.NPC.SetNodePoint(nodeId, pointId);
    return result.ret;
  }

  /**
   * @method getNodePointPosition
   * @param {number} nodeId
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  static getNodePointPosition(nodeId: number): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  } {
    const result = internal_omp.NPC.GetNodePointPosition(nodeId);
    return result;
  }

  /**
   * @method getNodePointCount
   * @param {number} nodeId
   * @returns {number}
   * @throws Will throw an error if the NPC is invalid
   */
  static getNodePointCount(nodeId: number): number {
    const result = internal_omp.NPC.GetNodePointCount(nodeId);
    return result.ret;
  }

  /**
   * @method getNodeInfo
   * @param {number} nodeId
   * @returns {{ret: boolean, vehicleNodes: number,pedNodes: number,naviNodes: number}} return object
   * @throws Will throw an error if the NPC is invalid
   */
  static getNodeInfo(nodeId: number): {
    ret: boolean;
    vehicleNodes: number;
    pedNodes: number;
    naviNodes: number;
  } {
    const result = internal_omp.NPC.GetNodeInfo(nodeId);
    return result;
  }
}
