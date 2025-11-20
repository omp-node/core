import {
  Actor,
  GangZone,
  NPC,
  ObjectMp,
  Pickup,
  Player,
  PlayerObject,
  TextDraw,
  Vehicle,
} from "./components";

export interface IOmpEvents {
  resourceStart: (error: boolean) => void;
  playerGiveDamageActor: (
    player: Player,
    actor: Actor,
    amount: number,
    weapon: number,
    part: number
  ) => void;
  actorStreamIn: (actor: Actor, forPlayer: Player) => void;
  actorStreamOut: (actor: Actor, forPlayer: Player) => void;
  playerEnterCheckpoint: (player: Player) => void;
  playerLeaveCheckpoint: (player: Player) => void;
  playerEnterRaceCheckpoint: (player: Player) => void;
  playerLeaveRaceCheckpoint: (player: Player) => void;
  playerRequestClass: (player: Player, classId: number) => void;
  consoleText: (command: string, parameters: string) => void;
  rconLoginAttempt: (
    address: string,
    password: string,
    success: boolean
  ) => void;
  tick: (elapsed: number) => void;
  playerFinishedDownloading: (player: Player, vw: number) => void;
  playerRequestDownload: (
    player: Player,
    type: number,
    checksum: number
  ) => void;
  dialogResponse: (
    player: Player,
    dialogId: number,
    response: number,
    listItem: number,
    inputText: string
  ) => void;
  playerEnterGangZone: (player: Player, zone: GangZone) => void;
  playerLeaveGangZone: (player: Player, zone: GangZone) => void;
  playerClickGangZone: (player: Player, zone: GangZone) => void;
  playerSelectedMenuRow: (player: Player, row: number) => void;
  playerExitedMenu: (player: Player) => void;
  npcFinishMove: (npc: NPC) => void;
  npcCreate: (npc: NPC) => void;
  npcDestroy: (npc: NPC) => void;
  npcWeaponStateChange: (npc: NPC, newState: number, oldState: number) => void;
  npcTakeDamage: (
    npc: NPC,
    damager: NPC,
    damage: number,
    weapon: number,
    bodyPart: number
  ) => void;
  npcGiveDamage: (
    npc: NPC,
    damaged: NPC,
    damage: number,
    weapon: number,
    bodyPart: number
  ) => void;
  npcDeath: (npc: NPC, killer: Player | undefined, reason: number) => void;
  npcSpawn: (npc: NPC) => void;
  npcRespawn: (npc: NPC) => void;
  npcPlaybackStart: (npc: NPC, recordId: number) => void;
  npcPlaybackEnd: (npc: NPC, recordId: number) => void;
  npcShotMissed: (
    npc: NPC,
    weapon: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) => void;
  npcShotPlayer: (
    npc: NPC,
    player: Player,
    weapon: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) => void;
  npcShotNPC: (
    npc: NPC,
    npcTarget: NPC,
    weapon: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) => void;
  npcShotVehicle: (
    npc: NPC,
    vehicle: Vehicle,
    weapon: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) => void;
  npcShotObject: (
    npc: NPC,
    object: Object,
    weapon: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) => void;
  npcShotPlayerObject: (
    npc: NPC,
    playerObject: PlayerObject,
    weapon: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) => void;
  npcFinishNodePoint: (npc: NPC, nodeId: number, pointId: number) => void;
  npcFinishNode: (npc: NPC, nodeId: number) => void;
  npcChangeNode: (npc: NPC, newNodeId: number, oldNodeId: number) => void;
  npcFinishMovePath: (npc: NPC, pathId: number) => void;
  npcFinishMovePathPoint: (npc: NPC, pathId: number, pointId: number) => void;
  objectMove: (object: ObjectMp) => void;
  playerObjectMove: (player: Player, object: ObjectMp) => void;
  playerEditObject: (
    player: Player,
    object: ObjectMp,
    response: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ) => void;
  playerEditPlayerObject: (
    player: Player,
    object: ObjectMp,
    response: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ) => void;
  playerEditAttachedObject: (
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
  ) => void;
  playerSelectObject: (
    player: Player,
    object: ObjectMp,
    model: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerSelectPlayerObject: (
    player: Player,
    object: ObjectMp,
    model: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerPickUpPickup: (player: Player, pickup: Pickup) => void;
  playerCancelTextDrawSelection: (player: Player) => void;
  playerCancelPlayerTextDrawSelection: (player: Player) => void;
  playerClickTextDraw: (player: Player, textdraw: TextDraw) => void;
  playerClickPlayerTextDraw: (player: Player, textdraw: TextDraw) => void;
  playerConnect: (player: Player) => void;
  playerSpawn: (player: Player) => void;
  playerCommandText: (player: Player, command: string) => void;
  playerKeyStateChange: (
    player: Player,
    newKeys: number,
    oldKeys: number
  ) => void;
  incomingConnection: (player: Player, ipAddress: string, port: number) => void;
  playerDisconnect: (player: Player, reason: number) => void;
  playerRequestSpawn: (player: Player) => void;
  playerStreamIn: (player: Player, forPlayer: Player) => void;
  playerStreamOut: (player: Player, forPlayer: Player) => void;
  playerText: (player: Player, text: string) => void;
  playerShotMissed: (
    player: Player,
    weapon: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerShotPlayer: (
    player: Player,
    target: Player,
    weapon: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerShotVehicle: (
    player: Player,
    target: Player,
    weapon: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerShotObject: (
    player: Player,
    target: Player,
    weapon: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerShotPlayerObject: (
    player: Player,
    target: Player,
    weapon: number,
    x: number,
    y: number,
    z: number
  ) => void;
  playerDeath: (
    player: Player,
    killer: Player | undefined,
    reason: number
  ) => void;
  playerTakeDamage: (
    player: Player,
    from: Player | undefined,
    amount: number,
    weapon: number,
    bodypart: number
  ) => void;
  playerGiveDamage: (
    player: Player,
    to: Player,
    amount: number,
    weapon: number,
    bodypart: number
  ) => void;
  playerInteriorChange: (
    player: Player,
    newInterior: number,
    oldInterior: number
  ) => void;
  playerStateChange: (
    player: Player,
    newState: number,
    oldState: number
  ) => void;
  playerClickMap: (player: Player, x: number, y: number, z: number) => void;
  playerClickPlayer: (player: Player, clicked: Player, source: number) => void;
  clientCheckResponse: (
    player: Player,
    actionType: number,
    address: number,
    result: number
  ) => void;
  playerUpdate: (player: Player) => void;
  vehicleStreamIn: (vehicle: Vehicle, player: Player) => void;
  vehicleStreamOut: (vehicle: Vehicle, player: Player) => void;
  vehicleDeath: (vehicle: Vehicle, player: Player) => void;
  playerEnterVehicle: (
    player: Player,
    vehicle: Vehicle,
    passenger: boolean
  ) => void;
  playerExitVehicle: (player: Player, vehicle: Vehicle) => void;
  vehicleDamageStatusUpdate: (vehicle: Vehicle, player: Player) => void;
  vehiclePaintJob: (player: Player, vehicle: Vehicle, paintJob: number) => void;
  vehicleMod: (player: Player, vehicle: Vehicle, component: number) => void;
  vehicleRespray: (
    player: Player,
    vehicle: Vehicle,
    color1: number,
    color2: number
  ) => void;
  enterExitModShop: (
    player: Player,
    enterexit: number,
    interiorId: number
  ) => void;
  vehicleSpawn: (vehicle: Vehicle) => void;
  unoccupiedVehicleUpdate: (
    vehicle: Vehicle,
    player: Player,
    seat: number,
    posX: number,
    posY: number,
    posZ: number,
    velocityX: number,
    velocityY: number,
    velocityZ: number
  ) => void;
  trailerUpdate: (player: Player, trailer: Vehicle) => void;
  vehicleSirenStateChange: (
    player: Player,
    vehicle: Vehicle,
    sirenState: number
  ) => void;
}
