import { PTR, internal_omp } from "../globals";

/**
 * Class class
 */
export default class Class {
  /**
   * @var ptr
   * @description Class pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description Class ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @add
   * @param {number} team
   * @param {number} skin
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} angle
   * @param {number} weapon1
   * @param {number} ammo1
   * @param {number} weapon2
   * @param {number} ammo2
   * @param {number} weapon3
   * @param {number} ammo3
   * @throws Will throw an error if the class creation fails
   */
  constructor(
    team: number,
    skin: number,
    x: number,
    y: number,
    z: number,
    angle: number,
    weapon1: number,
    ammo1: number,
    weapon2: number,
    ammo2: number,
    weapon3: number,
    ammo3: number
  );

  constructor(
    team: number,
    skin?: number,
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
    weapon1?: number,
    ammo1?: number,
    weapon2?: number,
    ammo2?: number,
    weapon3?: number,
    ammo3?: number
  ) {
    if (arguments.length < 2) {
      const result = internal_omp.Class.FromID(team);
      if (result.ret === 0) {
        throw new Error("Failed to create class");
      }

      this.ptr = PTR(result.ret);
      this.id = team;
      return;
    }

    const result = internal_omp.Class.Add(
      team,
      skin,
      x,
      y,
      z,
      angle,
      weapon1,
      ammo1,
      weapon2,
      ammo2,
      weapon3,
      ammo3
    );
    if (result.ret === 0) {
      throw new Error("Failed to create class");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the class retrieval fails
   */
  destroy(): void {
    if (!this.ptr) {
      throw new Error("Class instance is not valid");
    }

    const result = internal_omp.Actor.Destroy(this.ptr);
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
   * @description get class pointer
   * @returns {number|null} class pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get class id
   * @returns {number|null} class id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method count
   * @returns {number}
   * @throws Will throw an error if the class is invalid
   */
  static count(): number {
    const result = internal_omp.Class.Count();
    return result.ret;
  }

  /**
   * @method getData
   * @returns {{ret: boolean, teamid: number,skin: number,x: number,y: number,z: number,angle: number,weapon1: number,weapon1_ammo: number,weapon2: number,weapon2_ammo: number,weapon3: number,weapon3_ammo: number}} return object
   * @throws Will throw an error if the class is invalid
   */
  getData(): {
    ret: boolean;
    teamid: number;
    skin: number;
    x: number;
    y: number;
    z: number;
    angle: number;
    weapon1: number;
    weapon1_ammo: number;
    weapon2: number;
    weapon2_ammo: number;
    weapon3: number;
    weapon3_ammo: number;
  } {
    if (!this.ptr) {
      throw new Error("Class instance is not valid");
    }

    const result = internal_omp.Class.GetData(this.ptr);
    return result;
  }

  /**
   * @method edit
   * @param {number} teamid
   * @param {number} skin
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} angle
   * @param {number} weapon1
   * @param {number} ammo1
   * @param {number} weapon2
   * @param {number} ammo2
   * @param {number} weapon3
   * @param {number} ammo3
   * @returns {boolean}
   * @throws Will throw an error if the class is invalid
   */
  edit(
    teamid: number,
    skin: number,
    x: number,
    y: number,
    z: number,
    angle: number,
    weapon1: number,
    ammo1: number,
    weapon2: number,
    ammo2: number,
    weapon3: number,
    ammo3: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("Class instance is not valid");
    }

    const result = internal_omp.Class.Edit(
      this.ptr,
      teamid,
      skin,
      x,
      y,
      z,
      angle,
      weapon1,
      ammo1,
      weapon2,
      ammo2,
      weapon3,
      ammo3
    );
    return result.ret;
  }
}
