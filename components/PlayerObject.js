/**
 * PlayerObject class
 */
class PlayerObject {
  /**
   * @var ptr
   * @description PlayerObject pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description PlayerObject ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @var player
   * @description Player for this per player entity
   * @type {Player|null}
   * @private
   */
  #player = null;

  /**
   * @constructor
   * @param {Player} player
   * @param {number} modelidOrId
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} drawDistance
   * @throws Will throw an error if the playerObject creation fails
   */
  constructor(
    player,
    modelidOrId,
    x,
    y,
    z,
    rotationX,
    rotationY,
    rotationZ,
    drawDistance
  ) {
    if (x === undefined && y === undefined) {
      const result = __internal_omp.PlayerObject.FromID(
        player.getPtr(),
        modelidOrId
      );
      if (result.ret === 0) {
        throw new Error("Failed to retrieve playerTextLabel");
      }

      this.#ptr = BigInt(result.ret);
      this.#id = modelidOrId;
      this.#player = player;
      return;
    }

    const result = __internal_omp.PlayerObject.Create(
      player,
      modelidOrId,
      x,
      y,
      z,
      rotationX,
      rotationY,
      rotationZ,
      drawDistance
    );
    if (result.ret === 0) {
      throw new Error("Failed to create playerObject");
    }

    this.#player = player;
    this.#ptr = BigInt(result.ret);
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerObject retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.Actor.Destroy(this.#ptr);
    if (result.ret) {
      this.#ptr = null;
      this.#id = null;
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method getPlayer
   * @description get entity's player
   * @returns {Player|null} playerObject of current entity
   */
  getPlayer() {
    return this.#player;
  }

  /**
   * @method getPtr
   * @description get playerObject pointer
   * @returns {number|null} playerObject pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get playerObject id
   * @returns {number|null} playerObject id
   */
  getID() {
    return this.#id;
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
   * @throws Will throw an error if the playerObject is invalid
   */
  attachToVehicle(
    vehicle,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ
  ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.AttachToVehicle(
      this.#player.getPtr(),
      this.#ptr,
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
   * @method attachToPlayer
   * @param {Player} playerAttachedTo
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  attachToPlayer(
    playerAttachedTo,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ
  ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.AttachToPlayer(
      this.#player.getPtr(),
      this.#ptr,
      playerAttachedTo.getPtr(),
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
   * @param {PlayerObject} attachedTo
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  attachToObject(
    attachedTo,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ
  ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.AttachToObject(
      this.#player.getPtr(),
      this.#ptr,
      attachedTo.getPtr(),
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
   * @throws Will throw an error if the playerObject is invalid
   */
  setPos(x, y, z) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.SetPos(
      this.#player.getPtr(),
      this.#ptr,
      x,
      y,
      z
    );
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getPos() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetPos(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method setRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setRot(rotationX, rotationY, rotationZ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.SetRot(
      this.#player.getPtr(),
      this.#ptr,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method getRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getRot() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetRot(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the playerObject is invalid
   */
  getModel() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetModel(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method setNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setNoCameraCollision() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.SetNoCameraCollision(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isValid() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.IsValid(
      this.#player.getPtr(),
      this.#ptr
    );
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
   * @throws Will throw an error if the playerObject is invalid
   */
  move(x, y, z, speed, rotationX, rotationY, rotationZ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.Move(
      this.#player.getPtr(),
      this.#ptr,
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
   * @throws Will throw an error if the playerObject is invalid
   */
  stop() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.Stop(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isMoving
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isMoving() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.IsMoving(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method beginEditing
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  beginEditing() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.BeginEditing(
      this.#player.getPtr(),
      this.#ptr
    );
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
   * @throws Will throw an error if the playerObject is invalid
   */
  setMaterial(
    materialIndex,
    modelId,
    textureLibrary,
    textureName,
    materialColor
  ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.SetMaterial(
      this.#player.getPtr(),
      this.#ptr,
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
   * @param {number} materialSize
   * @param {string} fontface
   * @param {number} fontsize
   * @param {boolean} bold
   * @param {number} fontColor
   * @param {number} backgroundColor
   * @param {number} textalignment
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setMaterialText(
    text,
    materialIndex,
    materialSize,
    fontface,
    fontsize,
    bold,
    fontColor,
    backgroundColor,
    textalignment
  ) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.SetMaterialText(
      this.#player.getPtr(),
      this.#ptr,
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
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the playerObject is invalid
   */
  getDrawDistance() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetDrawDistance(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getMoveSpeed
   * @returns {number}
   * @throws Will throw an error if the playerObject is invalid
   */
  getMoveSpeed() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetMoveSpeed(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getMovingTargetPos
   * @returns {{ret: boolean, targetX: number,targetY: number,targetZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMovingTargetPos() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetMovingTargetPos(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getMovingTargetRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMovingTargetRot() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetMovingTargetRot(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, parentVehicle: number,parentObject: number,parentPlayer: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getAttachedData() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetAttachedData(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getAttachedOffset
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getAttachedOffset() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetAttachedOffset(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getSyncRotation
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  getSyncRotation() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetSyncRotation(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isMaterialSlotUsed
   * @param {number} materialIndex
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isMaterialSlotUsed(materialIndex) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.IsMaterialSlotUsed(
      this.#player.getPtr(),
      this.#ptr,
      materialIndex
    );
    return result.ret;
  }

  /**
   * @method getMaterial
   * @param {number} materialIndex
   * @returns {{ret: boolean, modelid: number,textureLibrary: string,textureName: string,materialColor: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMaterial(materialIndex) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetMaterial(
      this.#player.getPtr(),
      this.#ptr,
      materialIndex
    );
    return result;
  }

  /**
   * @method getMaterialText
   * @param {number} materialIndex
   * @returns {{ret: boolean, text: string,materialSize: number,fontFace: string,fontSize: number,bold: boolean,fontColor: number,backgroundColor: number,textAlignment: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMaterialText(materialIndex) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.GetMaterialText(
      this.#player.getPtr(),
      this.#ptr,
      materialIndex
    );
    return result;
  }

  /**
   * @method isNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isNoCameraCollision() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerObject instance is not valid");
    }

    const result = __internal_omp.PlayerObject.IsNoCameraCollision(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }
}

export default PlayerObject;
