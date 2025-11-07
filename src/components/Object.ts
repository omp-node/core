import { Player, Vehicle, omp } from "./index";
import { PTR, internal_omp } from "../globals";
import { OBJECT_MATERIAL_SIZE, OBJECT_MATERIAL_TEXT_ALIGN } from "src/enums";

/**
 * ObjectMp class
 */
export default class ObjectMp {
  /**
   * @var ptr
   * @description Object pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description Object ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} drawDistance
   * @throws Will throw an error if the object creation fails
   */
  constructor(
    modelid: number,
    x: number,
    y: number,
    z: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    drawDistance: number
  );

  constructor(
    modelid: number,
    x?: number,
    y?: number,
    z?: number,
    rotationX?: number,
    rotationY?: number,
    rotationZ?: number,
    drawDistance?: number
  ) {
    if (arguments.length < 2) {
      const result = internal_omp.Object.FromID(modelid);
      if (result.ret === 0) {
        throw new Error("Failed to create object");
      }

      this.ptr = PTR(result.ret);
      this.id = modelid;
      return;
    }

    const result = internal_omp.Object.Create(
      modelid,
      x!,
      y!,
      z!,
      rotationX!,
      rotationY!,
      rotationZ!,
      drawDistance!
    );
    if (result.ret === 0) {
      throw new Error("Failed to create object");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the object retrieval fails
   */
  destroy(): void {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.Destroy(this.ptr);
    if (result.ret) {
      this.ptr = null;
      this.id = null;
    } else {
      throw new Error("Failed to destroy object");
    }
  }

  /**
   * @method getPtr
   * @description get object pointer
   * @returns {number|null} object pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get object id
   * @returns {number|null} object id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method attachToVehicle
   * @param {Vehicle} vehicle
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  attachToVehicle(
    vehicle: Vehicle,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.AttachToVehicle(
      this.ptr,
      vehicle.getPtr(),
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method attachToObject
   * @param {ObjectMp} objAttachedTo
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {boolean} syncRotation
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  attachToObject(
    objAttachedTo: ObjectMp,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    syncRotation: boolean
  ): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.AttachToObject(
      this.ptr,
      objAttachedTo.getPtr(),
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ,
      syncRotation
    );
    return result.ret;
  }

  /**
   * @method attachToPlayer
   * @param {Player} player
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  attachToPlayer(
    player: Player,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.AttachToPlayer(
      this.ptr,
      player.getPtr(),
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setPos(x: number, y: number, z: number): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.SetPos(this.ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getPos(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetPos(this.ptr);
    return result;
  }

  /**
   * @method setRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setRot(rotationX: number, rotationY: number, rotationZ: number): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.SetRot(
      this.ptr,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method getRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getRot(): {
    ret: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetRot(this.ptr);
    return result;
  }

  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getModel(): number {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetModel(this.ptr);
    return result.ret;
  }

  /**
   * @method setNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setNoCameraCollision(): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.SetNoCameraCollision(this.ptr);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method move
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} speed
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  move(
    x: number,
    y: number,
    z: number,
    speed: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): number {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.Move(
      this.ptr,
      x,
      y,
      z,
      speed,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method stop
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  stop(): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.Stop(this.ptr);
    return result.ret;
  }

  /**
   * @method isMoving
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isMoving(): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.IsMoving(this.ptr);
    return result.ret;
  }

  /**
   * @method beginEditing
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  beginEditing(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.BeginEditing(player.getPtr(), this.ptr);
    return result.ret;
  }

  /**
   * @method beginSelecting
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  static beginSelecting(player: Player): boolean {
    const result = internal_omp.Object.BeginSelecting(player.getPtr());
    return result.ret;
  }

  /**
   * @method endEditing
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  static endEditing(player: Player): boolean {
    const result = internal_omp.Object.EndEditing(player.getPtr());
    return result.ret;
  }

  /**
   * @method setMaterial
   * @param {number} materialIndex
   * @param {number} modelId
   * @param {string} textureLibrary
   * @param {string} textureName
   * @param {number} materialColor
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setMaterial(
    materialIndex: number,
    modelId: number,
    textureLibrary: string,
    textureName: string,
    materialColor: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.SetMaterial(
      this.ptr,
      materialIndex,
      modelId,
      textureLibrary,
      textureName,
      materialColor
    );
    return result.ret;
  }

  /**
   * @method setMaterialText
   * @param {string} text
   * @param {number} materialIndex
   * @param {OBJECT_MATERIAL_SIZE} materialSize
   * @param {string} fontface
   * @param {number} fontsize
   * @param {boolean} bold
   * @param {number} fontColor
   * @param {number} backgroundColor
   * @param {OBJECT_MATERIAL_TEXT_ALIGN} textalignment
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setMaterialText(
    text: string,
    materialIndex: number,
    materialSize: OBJECT_MATERIAL_SIZE,
    fontface: string,
    fontsize: number,
    bold: boolean,
    fontColor: number,
    backgroundColor: number,
    textalignment: OBJECT_MATERIAL_TEXT_ALIGN
  ): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.SetMaterialText(
      this.ptr,
      text,
      materialIndex,
      materialSize,
      fontface,
      fontsize,
      bold,
      fontColor,
      backgroundColor,
      textalignment
    );
    return result.ret;
  }

  /**
   * @method setDefaultCameraCollision
   * @param {boolean} disable
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setDefaultCameraCollision(disable: boolean): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.SetDefaultCameraCollision(
      this.ptr,
      disable
    );
    return result.ret;
  }

  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getDrawDistance(): number {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetDrawDistance(this.ptr);
    return result.ret;
  }

  /**
   * @method getMoveSpeed
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getMoveSpeed(): number {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetMoveSpeed(this.ptr);
    return result.ret;
  }

  /**
   * @method getMovingTargetPos
   * @returns {{ret: boolean, targetX: number,targetY: number,targetZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMovingTargetPos(): {
    ret: boolean;
    targetX: number;
    targetY: number;
    targetZ: number;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetMovingTargetPos(this.ptr);
    return result;
  }

  /**
   * @method getMovingTargetRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMovingTargetRot(): {
    ret: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetMovingTargetRot(this.ptr);
    return result;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, parentVehicle: Vehicle, parentObject: ObjectMp, parentPlayer: Player}} return object
   * @throws Will throw an error if the object is invalid
   */
  getAttachedData(): {
    ret: boolean;
    parentVehicle: Vehicle | undefined;
    parentObject: ObjectMp | undefined;
    parentPlayer: Player | undefined;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetAttachedData(this.ptr);

    const ret: {
      ret: boolean;
      parentVehicle: Vehicle | undefined;
      parentObject: ObjectMp | undefined;
      parentPlayer: Player | undefined;
    } = {
      ret: result.ret,
      parentObject: omp.objects.get(PTR(result.parentObject)),
      parentVehicle: omp.vehicles.get(PTR(result.parentVehicle)),
      parentPlayer: omp.players.get(PTR(result.parentPlayer)),
    };

    return ret;
  }

  /**
   * @method getAttachedOffset
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getAttachedOffset(): {
    ret: boolean;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetAttachedOffset(this.ptr);
    return result;
  }

  /**
   * @method getSyncRotation
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  getSyncRotation(): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetSyncRotation(this.ptr);
    return result.ret;
  }

  /**
   * @method isMaterialSlotUsed
   * @param {number} materialIndex
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isMaterialSlotUsed(materialIndex: number): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.IsMaterialSlotUsed(
      this.ptr,
      materialIndex
    );
    return result.ret;
  }

  /**
   * @method getMaterial
   * @param {number} materialIndex
   * @returns {{ret: boolean, modelid: number,textureLibrary: string,textureName: string,materialColor: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMaterial(materialIndex: number): {
    ret: boolean;
    modelid: number;
    textureLibrary: string;
    textureName: string;
    materialColor: number;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetMaterial(this.ptr, materialIndex);
    return result;
  }

  /**
   * @method getMaterialText
   * @param {number} materialIndex
   * @returns {{ret: boolean, text: string,materialSize: OBJECT_MATERIAL_SIZE,fontFace: string,fontSize: number,bold: boolean,fontColor: number,backgroundColor: number,textAlignment: OBJECT_MATERIAL_TEXT_ALIGN}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMaterialText(materialIndex: number): {
    ret: boolean;
    text: string;
    materialSize: OBJECT_MATERIAL_SIZE;
    fontFace: string;
    fontSize: number;
    bold: boolean;
    fontColor: number;
    backgroundColor: number;
    textAlignment: OBJECT_MATERIAL_TEXT_ALIGN;
  } {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.GetMaterialText(this.ptr, materialIndex);
    return result;
  }

  /**
   * @method isObjectNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isObjectNoCameraCollision(): boolean {
    if (!this.ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = internal_omp.Object.IsObjectNoCameraCollision(this.ptr);
    return result.ret;
  }

  /**
   * @method getType
   * @param {Player} player
   * @param {number} objectid
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  static getType(player: Player, objectid: number): number {
    const result = internal_omp.Object.GetType(player.getPtr(), objectid);
    return result.ret;
  }
}
