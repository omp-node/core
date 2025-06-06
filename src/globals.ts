import {
  Actor,
  GangZone,
  Menu,
  ObjectMp,
  Pickup,
  Player,
  PlayerObject,
  PlayerTextDraw,
  PlayerTextLabel,
  TextDraw,
  TextLabel,
  Vehicle,
} from "./components";
import { PerPlayerEntityPool, PlayerPool, Pool } from "./pools";

// @ts-ignore
export const internal_omp = __internal_omp;

export function PTR(value: any) {
  if (internal_omp.voidSize === 8) return BigInt(value);
  else return value;
}

interface IOMP {
  /**
   * Adds a new event listener to resourceStart
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=resourceStart] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "resourceStart", callback: (error: boolean) => any): void;

  /**
   * Adds a new event listener to playerGiveDamageActor
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerGiveDamageActor",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to actorStreamIn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "actorStreamIn",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to actorStreamOut
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "actorStreamOut",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEnterCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerLeaveCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerLeaveCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterRaceCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEnterRaceCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerLeaveRaceCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerLeaveRaceCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerRequestClass
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestClass] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerRequestClass",
    callback: (player: Player, classId: number) => any
  ): void;

  /**
   * Adds a new event listener to consoleText
   *
   * @name omp.on
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=consoleText] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "consoleText",
    callback: (command: string, parameters: string) => any
  ): void;

  /**
   * Adds a new event listener to rconLoginAttempt
   *
   * @name omp.on
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=rconLoginAttempt] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "rconLoginAttempt",
    callback: (address: string, password: string, success: boolean) => any
  ): void;

  /**
   * Adds a new event listener to tick
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=tick] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "tick", callback: (elapsed: number) => any): void;

  /**
   * Adds a new event listener to playerFinishedDownloading
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerFinishedDownloading",
    callback: (player: Player, vw: number) => any
  ): void;

  /**
   * Adds a new event listener to playerRequestDownload
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerRequestDownload] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerRequestDownload",
    callback: (player: Player, type: number, checksum: number) => any
  ): void;

  /**
   * Adds a new event listener to dialogResponse
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=dialogResponse] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "dialogResponse",
    callback: (
      player: Player,
      dialogId: number,
      response: number,
      listItem: number,
      inputText: string
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterGangZone
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterGangZone] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEnterGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Adds a new event listener to playerLeaveGangZone
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerLeaveGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Adds a new event listener to playerClickGangZone
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickGangZone] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerClickGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Adds a new event listener to playerSelectedMenuRow
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerSelectedMenuRow",
    callback: (player: Player, row: number) => any
  ): void;

  /**
   * Adds a new event listener to playerExitedMenu
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitedMenu] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "playerExitedMenu", callback: (player: Player) => any): void;

  /**
   * Adds a new event listener to objectMove
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=objectMove] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "objectMove", callback: (object: ObjectMp) => any): void;

  /**
   * Adds a new event listener to playerObjectMove
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerObjectMove] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerObjectMove",
    callback: (player: Player, object: ObjectMp) => any
  ): void;

  /**
   * Adds a new event listener to playerEditObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEditObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerEditPlayerObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEditPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerEditAttachedObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEditAttachedObject",
    callback: (
      player: Player,
      saved: boolean,
      index: number,
      model: number,
      bone: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerSelectObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerSelectObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerSelectPlayerObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerSelectPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerPickUpPickup
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerPickUpPickup] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerPickUpPickup",
    callback: (player: Player, pickup: Pickup) => any
  ): void;

  /**
   * Adds a new event listener to playerCancelTextDrawSelection
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerCancelTextDrawSelection",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerCancelPlayerTextDrawSelection
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerCancelPlayerTextDrawSelection",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerClickTextDraw
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerClickTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;

  /**
   * Adds a new event listener to playerClickPlayerTextDraw
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerClickPlayerTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;

  /**
   * Adds a new event listener to playerConnect
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerConnect] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "playerConnect", callback: (player: Player) => any): void;

  /**
   * Adds a new event listener to playerSpawn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSpawn] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "playerSpawn", callback: (player: Player) => any): void;

  /**
   * Adds a new event listener to playerCommandText
   *
   * @name omp.on
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerCommandText] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerCommandText",
    callback: (player: Player, command: string) => any
  ): void;

  /**
   * Adds a new event listener to playerKeyStateChange
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerKeyStateChange] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerKeyStateChange",
    callback: (player: Player, newKeys: number, oldKeys: number) => any
  ): void;

  /**
   * Adds a new event listener to incomingConnection
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=incomingConnection] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "incomingConnection",
    callback: (player: Player, ipAddress: string, port: number) => any
  ): void;

  /**
   * Adds a new event listener to playerDisconnect
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDisconnect] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerDisconnect",
    callback: (player: Player, reason: number) => any
  ): void;

  /**
   * Adds a new event listener to playerRequestSpawn
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestSpawn] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "playerRequestSpawn", callback: (player: Player) => any): void;

  /**
   * Adds a new event listener to playerStreamIn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerStreamIn",
    callback: (player: Player, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerStreamOut
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerStreamOut",
    callback: (player: Player, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerText
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerText] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerText",
    callback: (player: Player, text: string) => any
  ): void;

  /**
   * Adds a new event listener to playerShotMissed
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotMissed] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerShotMissed",
    callback: (
      player: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotPlayer
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayer] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerShotPlayer",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotVehicle
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotVehicle] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerShotVehicle",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotObject
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerShotObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotPlayerObject
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerShotPlayerObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerDeath
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDeath] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerDeath",
    callback: (player: Player, killer: Player | undefined, reason: number) => any
  ): void;

  /**
   * Adds a new event listener to playerTakeDamage
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerTakeDamage] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerTakeDamage",
    callback: (
      player: Player,
      from: Player | undefined,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerGiveDamage
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamage] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerGiveDamage",
    callback: (
      player: Player,
      to: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerInteriorChange
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerInteriorChange] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerInteriorChange",
    callback: (player: Player, newInterior: number, oldInterior: number) => any
  ): void;

  /**
   * Adds a new event listener to playerStateChange
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStateChange] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerStateChange",
    callback: (player: Player, newState: number, oldState: number) => any
  ): void;

  /**
   * Adds a new event listener to playerClickMap
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickMap] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerClickMap",
    callback: (player: Player, x: number, y: number, z: number) => any
  ): void;

  /**
   * Adds a new event listener to playerClickPlayer
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayer] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerClickPlayer",
    callback: (player: Player, clicked: Player, source: number) => any
  ): void;

  /**
   * Adds a new event listener to clientCheckResponse
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=clientCheckResponse] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "clientCheckResponse",
    callback: (
      player: Player,
      actionType: number,
      address: number,
      result: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerUpdate
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "playerUpdate", callback: (player: Player) => any): void;

  /**
   * Adds a new event listener to vehicleStreamIn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleStreamIn",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehicleStreamOut
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleStreamOut",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehicleDeath
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDeath] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleDeath",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterVehicle
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterVehicle] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerEnterVehicle",
    callback: (player: Player, vehicle: Vehicle, passenger: boolean) => any
  ): void;

  /**
   * Adds a new event listener to playerExitVehicle
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitVehicle] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "playerExitVehicle",
    callback: (player: Player, vehicle: Vehicle) => any
  ): void;

  /**
   * Adds a new event listener to vehicleDamageStatusUpdate
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleDamageStatusUpdate",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehiclePaintJob
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehiclePaintJob] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehiclePaintJob",
    callback: (player: Player, vehicle: Vehicle, paintJob: number) => any
  ): void;

  /**
   * Adds a new event listener to vehicleMod
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleMod] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleMod",
    callback: (player: Player, vehicle: Vehicle, component: number) => any
  ): void;

  /**
   * Adds a new event listener to vehicleRespray
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleRespray] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleRespray",
    callback: (
      player: Player,
      vehicle: Vehicle,
      color1: number,
      color2: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to enterExitModShop
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=enterExitModShop] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "enterExitModShop",
    callback: (player: Player, enterexit: number, interiorId: number) => any
  ): void;

  /**
   * Adds a new event listener to vehicleSpawn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleSpawn] - Event name
   * @param {function} callback - Event callback
   */
  on(eventName: "vehicleSpawn", callback: (vehicle: Vehicle) => any): void;

  /**
   * Adds a new event listener to unoccupiedVehicleUpdate
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "unoccupiedVehicleUpdate",
    callback: (
      vehicle: Vehicle,
      player: Player,
      seat: number,
      posX: number,
      posY: number,
      posZ: number,
      velocityX: number,
      velocityY: number,
      velocityZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to trailerUpdate
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=trailerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "trailerUpdate",
    callback: (player: Player, trailer: Vehicle) => any
  ): void;

  /**
   * Adds a new event listener to vehicleSirenStateChange
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   * @param {function} callback - Event callback
   */
  on(
    eventName: "vehicleSirenStateChange",
    callback: (player: Player, vehicle: Vehicle, sirenState: number) => any
  ): void;

  /**
   * Adds a new event listener to resourceStart
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=resourceStart] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "resourceStart",
    callback: (error: boolean) => any
  ): void;

  /**
   * Adds a new event listener to playerGiveDamageActor
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerGiveDamageActor",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to actorStreamIn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "actorStreamIn",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to actorStreamOut
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "actorStreamOut",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEnterCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerLeaveCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerLeaveCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterRaceCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEnterRaceCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerLeaveRaceCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerLeaveRaceCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerRequestClass
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestClass] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerRequestClass",
    callback: (player: Player, classId: number) => any
  ): void;

  /**
   * Adds a new event listener to consoleText
   *
   * @name omp.addListener
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=consoleText] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "consoleText",
    callback: (command: string, parameters: string) => any
  ): void;

  /**
   * Adds a new event listener to rconLoginAttempt
   *
   * @name omp.addListener
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=rconLoginAttempt] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "rconLoginAttempt",
    callback: (address: string, password: string, success: boolean) => any
  ): void;

  /**
   * Adds a new event listener to tick
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=tick] - Event name
   * @param {function} callback - Event callback
   */
  addListener(eventName: "tick", callback: (elapsed: number) => any): void;

  /**
   * Adds a new event listener to playerFinishedDownloading
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerFinishedDownloading",
    callback: (player: Player, vw: number) => any
  ): void;

  /**
   * Adds a new event listener to playerRequestDownload
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerRequestDownload] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerRequestDownload",
    callback: (player: Player, type: number, checksum: number) => any
  ): void;

  /**
   * Adds a new event listener to dialogResponse
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=dialogResponse] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "dialogResponse",
    callback: (
      player: Player,
      dialogId: number,
      response: number,
      listItem: number,
      inputText: string
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterGangZone
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterGangZone] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEnterGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Adds a new event listener to playerLeaveGangZone
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerLeaveGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Adds a new event listener to playerClickGangZone
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickGangZone] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerClickGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Adds a new event listener to playerSelectedMenuRow
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerSelectedMenuRow",
    callback: (player: Player, row: number) => any
  ): void;

  /**
   * Adds a new event listener to playerExitedMenu
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitedMenu] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerExitedMenu",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to objectMove
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=objectMove] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "objectMove",
    callback: (object: ObjectMp) => any
  ): void;

  /**
   * Adds a new event listener to playerObjectMove
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerObjectMove] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerObjectMove",
    callback: (player: Player, object: ObjectMp) => any
  ): void;

  /**
   * Adds a new event listener to playerEditObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEditObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerEditPlayerObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEditPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerEditAttachedObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEditAttachedObject",
    callback: (
      player: Player,
      saved: boolean,
      index: number,
      model: number,
      bone: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerSelectObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerSelectObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerSelectPlayerObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerSelectPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerPickUpPickup
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerPickUpPickup] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerPickUpPickup",
    callback: (player: Player, pickup: Pickup) => any
  ): void;

  /**
   * Adds a new event listener to playerCancelTextDrawSelection
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerCancelTextDrawSelection",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerCancelPlayerTextDrawSelection
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerCancelPlayerTextDrawSelection",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerClickTextDraw
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerClickTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;

  /**
   * Adds a new event listener to playerClickPlayerTextDraw
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerClickPlayerTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;

  /**
   * Adds a new event listener to playerConnect
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerConnect] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerConnect",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerSpawn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSpawn] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerSpawn",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerCommandText
   *
   * @name omp.addListener
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerCommandText] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerCommandText",
    callback: (player: Player, command: string) => any
  ): void;

  /**
   * Adds a new event listener to playerKeyStateChange
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerKeyStateChange] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerKeyStateChange",
    callback: (player: Player, newKeys: number, oldKeys: number) => any
  ): void;

  /**
   * Adds a new event listener to incomingConnection
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=incomingConnection] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "incomingConnection",
    callback: (player: Player, ipAddress: string, port: number) => any
  ): void;

  /**
   * Adds a new event listener to playerDisconnect
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDisconnect] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerDisconnect",
    callback: (player: Player, reason: number) => any
  ): void;

  /**
   * Adds a new event listener to playerRequestSpawn
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestSpawn] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerRequestSpawn",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerStreamIn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerStreamIn",
    callback: (player: Player, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerStreamOut
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerStreamOut",
    callback: (player: Player, forPlayer: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerText
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerText] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerText",
    callback: (player: Player, text: string) => any
  ): void;

  /**
   * Adds a new event listener to playerShotMissed
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotMissed] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerShotMissed",
    callback: (
      player: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotPlayer
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayer] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerShotPlayer",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotVehicle
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotVehicle] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerShotVehicle",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotObject
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerShotObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerShotPlayerObject
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerShotPlayerObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerDeath
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDeath] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerDeath",
    callback: (player: Player, killer: Player | undefined, reason: number) => any
  ): void;

  /**
   * Adds a new event listener to playerTakeDamage
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerTakeDamage] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerTakeDamage",
    callback: (
      player: Player,
      from: Player | undefined,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerGiveDamage
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamage] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerGiveDamage",
    callback: (
      player: Player,
      to: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerInteriorChange
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerInteriorChange] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerInteriorChange",
    callback: (player: Player, newInterior: number, oldInterior: number) => any
  ): void;

  /**
   * Adds a new event listener to playerStateChange
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStateChange] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerStateChange",
    callback: (player: Player, newState: number, oldState: number) => any
  ): void;

  /**
   * Adds a new event listener to playerClickMap
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickMap] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerClickMap",
    callback: (player: Player, x: number, y: number, z: number) => any
  ): void;

  /**
   * Adds a new event listener to playerClickPlayer
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayer] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerClickPlayer",
    callback: (player: Player, clicked: Player, source: number) => any
  ): void;

  /**
   * Adds a new event listener to clientCheckResponse
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=clientCheckResponse] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "clientCheckResponse",
    callback: (
      player: Player,
      actionType: number,
      address: number,
      result: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to playerUpdate
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerUpdate",
    callback: (player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehicleStreamIn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleStreamIn",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehicleStreamOut
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleStreamOut",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehicleDeath
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDeath] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleDeath",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to playerEnterVehicle
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterVehicle] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerEnterVehicle",
    callback: (player: Player, vehicle: Vehicle, passenger: boolean) => any
  ): void;

  /**
   * Adds a new event listener to playerExitVehicle
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitVehicle] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "playerExitVehicle",
    callback: (player: Player, vehicle: Vehicle) => any
  ): void;

  /**
   * Adds a new event listener to vehicleDamageStatusUpdate
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleDamageStatusUpdate",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Adds a new event listener to vehiclePaintJob
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehiclePaintJob] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehiclePaintJob",
    callback: (player: Player, vehicle: Vehicle, paintJob: number) => any
  ): void;

  /**
   * Adds a new event listener to vehicleMod
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleMod] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleMod",
    callback: (player: Player, vehicle: Vehicle, component: number) => any
  ): void;

  /**
   * Adds a new event listener to vehicleRespray
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleRespray] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleRespray",
    callback: (
      player: Player,
      vehicle: Vehicle,
      color1: number,
      color2: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to enterExitModShop
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=enterExitModShop] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "enterExitModShop",
    callback: (player: Player, enterexit: number, interiorId: number) => any
  ): void;

  /**
   * Adds a new event listener to vehicleSpawn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleSpawn] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleSpawn",
    callback: (vehicle: Vehicle) => any
  ): void;

  /**
   * Adds a new event listener to unoccupiedVehicleUpdate
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "unoccupiedVehicleUpdate",
    callback: (
      vehicle: Vehicle,
      player: Player,
      seat: number,
      posX: number,
      posY: number,
      posZ: number,
      velocityX: number,
      velocityY: number,
      velocityZ: number
    ) => any
  ): void;

  /**
   * Adds a new event listener to trailerUpdate
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=trailerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "trailerUpdate",
    callback: (player: Player, trailer: Vehicle) => any
  ): void;

  /**
   * Adds a new event listener to vehicleSirenStateChange
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   * @param {function} callback - Event callback
   */
  addListener(
    eventName: "vehicleSirenStateChange",
    callback: (player: Player, vehicle: Vehicle, sirenState: number) => any
  ): void;

  /**
   * Removes a specific listener for resourceStart
   *
   * @name omp.removeListener
   * @param {string} [eventName=resourceStart] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "resourceStart",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerGiveDamageActor
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerGiveDamageActor",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for actorStreamIn
   *
   * @name omp.removeListener
   * @param {string} [eventName=actorStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "actorStreamIn",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;

  /**
   * Removes a specific listener for actorStreamOut
   *
   * @name omp.removeListener
   * @param {string} [eventName=actorStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "actorStreamOut",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerEnterCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEnterCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerLeaveCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerLeaveCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerEnterRaceCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEnterRaceCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerLeaveRaceCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerLeaveRaceCheckpoint",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerRequestClass
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerRequestClass] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerRequestClass",
    callback: (player: Player, classId: number) => any
  ): void;

  /**
   * Removes a specific listener for consoleText
   *
   * @name omp.removeListener
   * @param {string} [eventName=consoleText] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "consoleText",
    callback: (command: string, parameters: string) => any
  ): void;

  /**
   * Removes a specific listener for rconLoginAttempt
   *
   * @name omp.removeListener
   * @param {string} [eventName=rconLoginAttempt] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "rconLoginAttempt",
    callback: (address: string, password: string, success: boolean) => any
  ): void;

  /**
   * Removes a specific listener for tick
   *
   * @name omp.removeListener
   * @param {string} [eventName=tick] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(eventName: "tick", callback: (elapsed: number) => any): void;

  /**
   * Removes a specific listener for playerFinishedDownloading
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerFinishedDownloading",
    callback: (player: Player, vw: number) => any
  ): void;

  /**
   * Removes a specific listener for playerRequestDownload
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerRequestDownload] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerRequestDownload",
    callback: (player: Player, type: number, checksum: number) => any
  ): void;

  /**
   * Removes a specific listener for dialogResponse
   *
   * @name omp.removeListener
   * @param {string} [eventName=dialogResponse] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "dialogResponse",
    callback: (
      player: Player,
      dialogId: number,
      response: number,
      listItem: number,
      inputText: string
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerEnterGangZone
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterGangZone] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEnterGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Removes a specific listener for playerLeaveGangZone
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerLeaveGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Removes a specific listener for playerClickGangZone
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickGangZone] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerClickGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;

  /**
   * Removes a specific listener for playerSelectedMenuRow
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerSelectedMenuRow",
    callback: (player: Player, row: number) => any
  ): void;

  /**
   * Removes a specific listener for playerExitedMenu
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerExitedMenu] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerExitedMenu",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for objectMove
   *
   * @name omp.removeListener
   * @param {string} [eventName=objectMove] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "objectMove",
    callback: (object: ObjectMp) => any
  ): void;

  /**
   * Removes a specific listener for playerObjectMove
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerObjectMove] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerObjectMove",
    callback: (player: Player, object: ObjectMp) => any
  ): void;

  /**
   * Removes a specific listener for playerEditObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEditObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEditObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerEditPlayerObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEditPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerEditAttachedObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEditAttachedObject",
    callback: (
      player: Player,
      saved: boolean,
      index: number,
      model: number,
      bone: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerSelectObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSelectObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerSelectObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerSelectPlayerObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerSelectPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerPickUpPickup
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerPickUpPickup] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerPickUpPickup",
    callback: (player: Player, pickup: Pickup) => any
  ): void;

  /**
   * Removes a specific listener for playerCancelTextDrawSelection
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerCancelTextDrawSelection",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerCancelPlayerTextDrawSelection
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerCancelPlayerTextDrawSelection",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerClickTextDraw
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerClickTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;

  /**
   * Removes a specific listener for playerClickPlayerTextDraw
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerClickPlayerTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;

  /**
   * Removes a specific listener for playerConnect
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerConnect] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerConnect",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerSpawn
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSpawn] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerSpawn",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerCommandText
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerCommandText] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerCommandText",
    callback: (player: Player, command: string) => any
  ): void;

  /**
   * Removes a specific listener for playerKeyStateChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerKeyStateChange] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerKeyStateChange",
    callback: (player: Player, newKeys: number, oldKeys: number) => any
  ): void;

  /**
   * Removes a specific listener for incomingConnection
   *
   * @name omp.removeListener
   * @param {string} [eventName=incomingConnection] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "incomingConnection",
    callback: (player: Player, ipAddress: string, port: number) => any
  ): void;

  /**
   * Removes a specific listener for playerDisconnect
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerDisconnect] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerDisconnect",
    callback: (player: Player, reason: number) => any
  ): void;

  /**
   * Removes a specific listener for playerRequestSpawn
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerRequestSpawn] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerRequestSpawn",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerStreamIn
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerStreamIn",
    callback: (player: Player, forPlayer: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerStreamOut
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerStreamOut",
    callback: (player: Player, forPlayer: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerText
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerText] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerText",
    callback: (player: Player, text: string) => any
  ): void;

  /**
   * Removes a specific listener for playerShotMissed
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotMissed] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerShotMissed",
    callback: (
      player: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerShotPlayer
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotPlayer] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerShotPlayer",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerShotVehicle
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotVehicle] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerShotVehicle",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerShotObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerShotObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerShotPlayerObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerShotPlayerObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerDeath
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerDeath] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerDeath",
    callback: (player: Player, killer: Player | undefined, reason: number) => any
  ): void;

  /**
   * Removes a specific listener for playerTakeDamage
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerTakeDamage] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerTakeDamage",
    callback: (
      player: Player,
      from: Player | undefined,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerGiveDamage
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerGiveDamage] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerGiveDamage",
    callback: (
      player: Player,
      to: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerInteriorChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerInteriorChange] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerInteriorChange",
    callback: (player: Player, newInterior: number, oldInterior: number) => any
  ): void;

  /**
   * Removes a specific listener for playerStateChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerStateChange] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerStateChange",
    callback: (player: Player, newState: number, oldState: number) => any
  ): void;

  /**
   * Removes a specific listener for playerClickMap
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickMap] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerClickMap",
    callback: (player: Player, x: number, y: number, z: number) => any
  ): void;

  /**
   * Removes a specific listener for playerClickPlayer
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickPlayer] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerClickPlayer",
    callback: (player: Player, clicked: Player, source: number) => any
  ): void;

  /**
   * Removes a specific listener for clientCheckResponse
   *
   * @name omp.removeListener
   * @param {string} [eventName=clientCheckResponse] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "clientCheckResponse",
    callback: (
      player: Player,
      actionType: number,
      address: number,
      result: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for playerUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerUpdate",
    callback: (player: Player) => any
  ): void;

  /**
   * Removes a specific listener for vehicleStreamIn
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleStreamIn",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Removes a specific listener for vehicleStreamOut
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleStreamOut",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Removes a specific listener for vehicleDeath
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleDeath] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleDeath",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Removes a specific listener for playerEnterVehicle
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterVehicle] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerEnterVehicle",
    callback: (player: Player, vehicle: Vehicle, passenger: boolean) => any
  ): void;

  /**
   * Removes a specific listener for playerExitVehicle
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerExitVehicle] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "playerExitVehicle",
    callback: (player: Player, vehicle: Vehicle) => any
  ): void;

  /**
   * Removes a specific listener for vehicleDamageStatusUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleDamageStatusUpdate",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;

  /**
   * Removes a specific listener for vehiclePaintJob
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehiclePaintJob] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehiclePaintJob",
    callback: (player: Player, vehicle: Vehicle, paintJob: number) => any
  ): void;

  /**
   * Removes a specific listener for vehicleMod
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleMod] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleMod",
    callback: (player: Player, vehicle: Vehicle, component: number) => any
  ): void;

  /**
   * Removes a specific listener for vehicleRespray
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleRespray] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleRespray",
    callback: (
      player: Player,
      vehicle: Vehicle,
      color1: number,
      color2: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for enterExitModShop
   *
   * @name omp.removeListener
   * @param {string} [eventName=enterExitModShop] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "enterExitModShop",
    callback: (player: Player, enterexit: number, interiorId: number) => any
  ): void;

  /**
   * Removes a specific listener for vehicleSpawn
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleSpawn] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleSpawn",
    callback: (vehicle: Vehicle) => any
  ): void;

  /**
   * Removes a specific listener for unoccupiedVehicleUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "unoccupiedVehicleUpdate",
    callback: (
      vehicle: Vehicle,
      player: Player,
      seat: number,
      posX: number,
      posY: number,
      posZ: number,
      velocityX: number,
      velocityY: number,
      velocityZ: number
    ) => any
  ): void;

  /**
   * Removes a specific listener for trailerUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=trailerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "trailerUpdate",
    callback: (player: Player, trailer: Vehicle) => any
  ): void;

  /**
   * Removes a specific listener for vehicleSirenStateChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   * @param {function} callback - Event callback
   */
  removeListener(
    eventName: "vehicleSirenStateChange",
    callback: (player: Player, vehicle: Vehicle, sirenState: number) => any
  ): void;

  /**
   * Removes all listeners for resourceStart
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=resourceStart] - Event name
   */
  removeAllListeners(eventName: "resourceStart"): void;

  /**
   * Removes all listeners for playerGiveDamageActor
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   */
  removeAllListeners(eventName: "playerGiveDamageActor"): void;

  /**
   * Removes all listeners for actorStreamIn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=actorStreamIn] - Event name
   */
  removeAllListeners(eventName: "actorStreamIn"): void;

  /**
   * Removes all listeners for actorStreamOut
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=actorStreamOut] - Event name
   */
  removeAllListeners(eventName: "actorStreamOut"): void;

  /**
   * Removes all listeners for playerEnterCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   */
  removeAllListeners(eventName: "playerEnterCheckpoint"): void;

  /**
   * Removes all listeners for playerLeaveCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   */
  removeAllListeners(eventName: "playerLeaveCheckpoint"): void;

  /**
   * Removes all listeners for playerEnterRaceCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   */
  removeAllListeners(eventName: "playerEnterRaceCheckpoint"): void;

  /**
   * Removes all listeners for playerLeaveRaceCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   */
  removeAllListeners(eventName: "playerLeaveRaceCheckpoint"): void;

  /**
   * Removes all listeners for playerRequestClass
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerRequestClass] - Event name
   */
  removeAllListeners(eventName: "playerRequestClass"): void;

  /**
   * Removes all listeners for consoleText
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=consoleText] - Event name
   */
  removeAllListeners(eventName: "consoleText"): void;

  /**
   * Removes all listeners for rconLoginAttempt
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=rconLoginAttempt] - Event name
   */
  removeAllListeners(eventName: "rconLoginAttempt"): void;

  /**
   * Removes all listeners for tick
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=tick] - Event name
   */
  removeAllListeners(eventName: "tick"): void;

  /**
   * Removes all listeners for playerFinishedDownloading
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   */
  removeAllListeners(eventName: "playerFinishedDownloading"): void;

  /**
   * Removes all listeners for playerRequestDownload
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerRequestDownload] - Event name
   */
  removeAllListeners(eventName: "playerRequestDownload"): void;

  /**
   * Removes all listeners for dialogResponse
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=dialogResponse] - Event name
   */
  removeAllListeners(eventName: "dialogResponse"): void;

  /**
   * Removes all listeners for playerEnterGangZone
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterGangZone] - Event name
   */
  removeAllListeners(eventName: "playerEnterGangZone"): void;

  /**
   * Removes all listeners for playerLeaveGangZone
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   */
  removeAllListeners(eventName: "playerLeaveGangZone"): void;

  /**
   * Removes all listeners for playerClickGangZone
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickGangZone] - Event name
   */
  removeAllListeners(eventName: "playerClickGangZone"): void;

  /**
   * Removes all listeners for playerSelectedMenuRow
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   */
  removeAllListeners(eventName: "playerSelectedMenuRow"): void;

  /**
   * Removes all listeners for playerExitedMenu
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerExitedMenu] - Event name
   */
  removeAllListeners(eventName: "playerExitedMenu"): void;

  /**
   * Removes all listeners for objectMove
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=objectMove] - Event name
   */
  removeAllListeners(eventName: "objectMove"): void;

  /**
   * Removes all listeners for playerObjectMove
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerObjectMove] - Event name
   */
  removeAllListeners(eventName: "playerObjectMove"): void;

  /**
   * Removes all listeners for playerEditObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEditObject] - Event name
   */
  removeAllListeners(eventName: "playerEditObject"): void;

  /**
   * Removes all listeners for playerEditPlayerObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   */
  removeAllListeners(eventName: "playerEditPlayerObject"): void;

  /**
   * Removes all listeners for playerEditAttachedObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   */
  removeAllListeners(eventName: "playerEditAttachedObject"): void;

  /**
   * Removes all listeners for playerSelectObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSelectObject] - Event name
   */
  removeAllListeners(eventName: "playerSelectObject"): void;

  /**
   * Removes all listeners for playerSelectPlayerObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   */
  removeAllListeners(eventName: "playerSelectPlayerObject"): void;

  /**
   * Removes all listeners for playerPickUpPickup
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerPickUpPickup] - Event name
   */
  removeAllListeners(eventName: "playerPickUpPickup"): void;

  /**
   * Removes all listeners for playerCancelTextDrawSelection
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   */
  removeAllListeners(eventName: "playerCancelTextDrawSelection"): void;

  /**
   * Removes all listeners for playerCancelPlayerTextDrawSelection
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   */
  removeAllListeners(eventName: "playerCancelPlayerTextDrawSelection"): void;

  /**
   * Removes all listeners for playerClickTextDraw
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickTextDraw] - Event name
   */
  removeAllListeners(eventName: "playerClickTextDraw"): void;

  /**
   * Removes all listeners for playerClickPlayerTextDraw
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   */
  removeAllListeners(eventName: "playerClickPlayerTextDraw"): void;

  /**
   * Removes all listeners for playerConnect
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerConnect] - Event name
   */
  removeAllListeners(eventName: "playerConnect"): void;

  /**
   * Removes all listeners for playerSpawn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSpawn] - Event name
   */
  removeAllListeners(eventName: "playerSpawn"): void;

  /**
   * Removes all listeners for playerCommandText
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerCommandText] - Event name
   */
  removeAllListeners(eventName: "playerCommandText"): void;

  /**
   * Removes all listeners for playerKeyStateChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerKeyStateChange] - Event name
   */
  removeAllListeners(eventName: "playerKeyStateChange"): void;

  /**
   * Removes all listeners for incomingConnection
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=incomingConnection] - Event name
   */
  removeAllListeners(eventName: "incomingConnection"): void;

  /**
   * Removes all listeners for playerDisconnect
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerDisconnect] - Event name
   */
  removeAllListeners(eventName: "playerDisconnect"): void;

  /**
   * Removes all listeners for playerRequestSpawn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerRequestSpawn] - Event name
   */
  removeAllListeners(eventName: "playerRequestSpawn"): void;

  /**
   * Removes all listeners for playerStreamIn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerStreamIn] - Event name
   */
  removeAllListeners(eventName: "playerStreamIn"): void;

  /**
   * Removes all listeners for playerStreamOut
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerStreamOut] - Event name
   */
  removeAllListeners(eventName: "playerStreamOut"): void;

  /**
   * Removes all listeners for playerText
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerText] - Event name
   */
  removeAllListeners(eventName: "playerText"): void;

  /**
   * Removes all listeners for playerShotMissed
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotMissed] - Event name
   */
  removeAllListeners(eventName: "playerShotMissed"): void;

  /**
   * Removes all listeners for playerShotPlayer
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotPlayer] - Event name
   */
  removeAllListeners(eventName: "playerShotPlayer"): void;

  /**
   * Removes all listeners for playerShotVehicle
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotVehicle] - Event name
   */
  removeAllListeners(eventName: "playerShotVehicle"): void;

  /**
   * Removes all listeners for playerShotObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotObject] - Event name
   */
  removeAllListeners(eventName: "playerShotObject"): void;

  /**
   * Removes all listeners for playerShotPlayerObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   */
  removeAllListeners(eventName: "playerShotPlayerObject"): void;

  /**
   * Removes all listeners for playerDeath
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerDeath] - Event name
   */
  removeAllListeners(eventName: "playerDeath"): void;

  /**
   * Removes all listeners for playerTakeDamage
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerTakeDamage] - Event name
   */
  removeAllListeners(eventName: "playerTakeDamage"): void;

  /**
   * Removes all listeners for playerGiveDamage
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerGiveDamage] - Event name
   */
  removeAllListeners(eventName: "playerGiveDamage"): void;

  /**
   * Removes all listeners for playerInteriorChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerInteriorChange] - Event name
   */
  removeAllListeners(eventName: "playerInteriorChange"): void;

  /**
   * Removes all listeners for playerStateChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerStateChange] - Event name
   */
  removeAllListeners(eventName: "playerStateChange"): void;

  /**
   * Removes all listeners for playerClickMap
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickMap] - Event name
   */
  removeAllListeners(eventName: "playerClickMap"): void;

  /**
   * Removes all listeners for playerClickPlayer
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickPlayer] - Event name
   */
  removeAllListeners(eventName: "playerClickPlayer"): void;

  /**
   * Removes all listeners for clientCheckResponse
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=clientCheckResponse] - Event name
   */
  removeAllListeners(eventName: "clientCheckResponse"): void;

  /**
   * Removes all listeners for playerUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerUpdate] - Event name
   */
  removeAllListeners(eventName: "playerUpdate"): void;

  /**
   * Removes all listeners for vehicleStreamIn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleStreamIn] - Event name
   */
  removeAllListeners(eventName: "vehicleStreamIn"): void;

  /**
   * Removes all listeners for vehicleStreamOut
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleStreamOut] - Event name
   */
  removeAllListeners(eventName: "vehicleStreamOut"): void;

  /**
   * Removes all listeners for vehicleDeath
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleDeath] - Event name
   */
  removeAllListeners(eventName: "vehicleDeath"): void;

  /**
   * Removes all listeners for playerEnterVehicle
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterVehicle] - Event name
   */
  removeAllListeners(eventName: "playerEnterVehicle"): void;

  /**
   * Removes all listeners for playerExitVehicle
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerExitVehicle] - Event name
   */
  removeAllListeners(eventName: "playerExitVehicle"): void;

  /**
   * Removes all listeners for vehicleDamageStatusUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   */
  removeAllListeners(eventName: "vehicleDamageStatusUpdate"): void;

  /**
   * Removes all listeners for vehiclePaintJob
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehiclePaintJob] - Event name
   */
  removeAllListeners(eventName: "vehiclePaintJob"): void;

  /**
   * Removes all listeners for vehicleMod
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleMod] - Event name
   */
  removeAllListeners(eventName: "vehicleMod"): void;

  /**
   * Removes all listeners for vehicleRespray
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleRespray] - Event name
   */
  removeAllListeners(eventName: "vehicleRespray"): void;

  /**
   * Removes all listeners for enterExitModShop
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=enterExitModShop] - Event name
   */
  removeAllListeners(eventName: "enterExitModShop"): void;

  /**
   * Removes all listeners for vehicleSpawn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleSpawn] - Event name
   */
  removeAllListeners(eventName: "vehicleSpawn"): void;

  /**
   * Removes all listeners for unoccupiedVehicleUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   */
  removeAllListeners(eventName: "unoccupiedVehicleUpdate"): void;

  /**
   * Removes all listeners for trailerUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=trailerUpdate] - Event name
   */
  removeAllListeners(eventName: "trailerUpdate"): void;

  /**
   * Removes all listeners for vehicleSirenStateChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   */
  removeAllListeners(eventName: "vehicleSirenStateChange"): void;

  /**
   * General use for externally defined events
   * @param eventName string
   * @param callback any
   */
  on<TArgs extends any[] = any[]>(eventName: string, callback: (...args: TArgs) => any): void;

  /**
   * General use for externally defined events
   * @param eventName string
   * @param callback any
   */
  addListener<TArgs extends any[] = any[]>(eventName: string, callback: (...args: TArgs) => any): void;

  /**
   * General use for externally defined events
   * @param eventName string
   * @param callback any
   */
  removeListener<TArgs extends any[] = any[]>(eventName: string, callback: (...args: TArgs) => any): void;

  /**
   * General use for externally defined events
   * @param eventName string
   */
  removeAllListeners(eventName: string): void;

  /**
   * open.mp log function, works like console.log except it writes to your server log file as well
   *
   * @name omp.log
   * @param message any
   * @param optionalParams any[]
   */
  log(message?: any, ...optionalParams: any[]): void;

  /**
   * Players
   */
  players: Pool<Player>;

  /**
   * Vehicles
   */
  vehicles: Pool<Vehicle>;

  /**
   * Objects
   */
  objects: Pool<ObjectMp>;

  /**
   * TextDraws
   */
  textdraws: Pool<TextDraw>;

  /**
   * Pickups
   */
  pickups: Pool<Pickup>;

  /**
   * GangZones
   */
  gangzones: Pool<GangZone>;

  /**
   * TextLabels
   */
  textlabels: Pool<TextLabel>;

  /**
   * Actors
   */
  actors: Pool<Actor>;

  /**
   * Menus
   */
  menus: Pool<Menu>;

  /**
   * Player Objects
   */
  playerObjects: PerPlayerEntityPool<PlayerPool<PlayerObject>>;

  /**
   * Player TextLabels
   */
  playerTextLabels: PerPlayerEntityPool<PlayerPool<PlayerTextLabel>>;

  /**
   * Player TextDraws
   */
  playerTextDraws: PerPlayerEntityPool<PlayerPool<PlayerTextDraw>>;

  /**
   * Resource information
   */
  resource: { name: string; path: string; entryFile: string };
}

// @ts-ignore
export const omp: IOMP = __omp;
