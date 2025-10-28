// @ts-nocheck

import {
  Actor,
  GangZone,
  Menu,
  NPC,
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
import EventEmitter from "events";
import { internal_omp, omp } from "./globals.js";

const processEventListeners = async (name: string, badRet: number, ...args) => {
  const listeners = internal_omp.eventEmitter.listeners(name);
  let result = true;
  for (const listener of listeners) {
    result = await listener(...args);
    if (typeof result === "boolean" || typeof result === "number") {
      switch (badRet) {
        case 1:
          if (!result) {
            return false;
          }
          break;
        case 2:
          if (result) {
            return true;
          }
          break;
        case 0:
        default:
          break;
      }
    }
  }
};

/**
 * @type {EventEmitter}
 */
const eventEmitter_raw: EventEmitter = internal_omp.eventEmitter_raw;
export const initializeEvents = () => {
  // Internal playerPoolEntryCreate event handler
  eventEmitter_raw.on("playerPoolEntryCreate", async (_, entityId) => {
    const entity = omp.players.at(entityId);
    if (entity) {
      omp.players.remove_INTERNAL_UNSAFE(entity);
    }

    omp.players.add_INTERNAL_UNSAFE(new Player(entityId));
  });

  // Internal playerPoolEntryDestroy event handler
  eventEmitter_raw.on("playerPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.players.at(entityId);
    omp.players.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal vehiclePoolEntryCreate event handler
  eventEmitter_raw.on("vehiclePoolEntryCreate", async (_, entityId) => {
    const entity = omp.vehicles.at(entityId);
    if (entity) {
      omp.vehicles.remove_INTERNAL_UNSAFE(entity);
    }

    omp.vehicles.add_INTERNAL_UNSAFE(new Vehicle(entityId));
  });

  // Internal vehiclePoolEntryDestroy event handler
  eventEmitter_raw.on("vehiclePoolEntryDestroy", async (_, entityId) => {
    const entity = omp.vehicles.at(entityId);
    omp.vehicles.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal objectPoolEntryCreate event handler
  eventEmitter_raw.on("objectPoolEntryCreate", async (_, entityId) => {
    const entity = omp.objects.at(entityId);
    if (entity) {
      omp.objects.remove_INTERNAL_UNSAFE(entity);
    }

    omp.objects.add_INTERNAL_UNSAFE(new ObjectMp(entityId));
  });

  // Internal objectPoolEntryDestroy event handler
  eventEmitter_raw.on("objectPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.objects.at(entityId);
    omp.objects.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal textdrawPoolEntryCreate event handler
  eventEmitter_raw.on("textdrawPoolEntryCreate", async (_, entityId) => {
    const entity = omp.textdraws.at(entityId);
    if (entity) {
      omp.textdraws.remove_INTERNAL_UNSAFE(entity);
    }

    omp.textdraws.add_INTERNAL_UNSAFE(new TextDraw(entityId));
  });

  // Internal textdrawPoolEntryDestroy event handler
  eventEmitter_raw.on("textdrawPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.textdraws.at(entityId);
    omp.textdraws.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal pickupPoolEntryCreate event handler
  eventEmitter_raw.on("pickupPoolEntryCreate", async (_, entityId) => {
    const entity = omp.pickups.at(entityId);
    if (entity) {
      omp.pickups.remove_INTERNAL_UNSAFE(entity);
    }

    omp.pickups.add_INTERNAL_UNSAFE(new Pickup(entityId));
  });

  // Internal pickupPoolEntryDestroy event handler
  eventEmitter_raw.on("pickupPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.pickups.at(entityId);
    omp.pickups.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal gangzonePoolEntryCreate event handler
  eventEmitter_raw.on("gangzonePoolEntryCreate", async (_, entityId) => {
    const entity = omp.gangzones.at(entityId);
    if (entity) {
      omp.gangzones.remove_INTERNAL_UNSAFE(entity);
    }

    omp.gangzones.add_INTERNAL_UNSAFE(new GangZone(entityId));
  });

  // Internal gangzonePoolEntryDestroy event handler
  eventEmitter_raw.on("gangzonePoolEntryDestroy", async (_, entityId) => {
    const entity = omp.gangzones.at(entityId);
    omp.gangzones.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal textlabelPoolEntryCreate event handler
  eventEmitter_raw.on("textlabelPoolEntryCreate", async (_, entityId) => {
    const entity = omp.textlabels.at(entityId);
    if (entity) {
      omp.textlabels.remove_INTERNAL_UNSAFE(entity);
    }

    omp.textlabels.add_INTERNAL_UNSAFE(new TextLabel(entityId));
  });

  // Internal textlabelPoolEntryDestroy event handler
  eventEmitter_raw.on("textlabelPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.textlabels.at(entityId);
    omp.textlabels.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal actorPoolEntryCreate event handler
  eventEmitter_raw.on("actorPoolEntryCreate", async (_, entityId) => {
    const entity = omp.actors.at(entityId);
    if (entity) {
      omp.actors.remove_INTERNAL_UNSAFE(entity);
    }

    omp.actors.add_INTERNAL_UNSAFE(new Actor(entityId));
  });

  // Internal actorPoolEntryDestroy event handler
  eventEmitter_raw.on("actorPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.actors.at(entityId);
    omp.actors.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal menuPoolEntryCreate event handler
  eventEmitter_raw.on("menuPoolEntryCreate", async (_, entityId) => {
    const entity = omp.menus.at(entityId);
    if (entity) {
      omp.menus.remove_INTERNAL_UNSAFE(entity);
    }

    omp.menus.add_INTERNAL_UNSAFE(new Menu(entityId));
  });

  // Internal menuPoolEntryDestroy event handler
  eventEmitter_raw.on("menuPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.menus.at(entityId);
    omp.menus.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal npcPoolEntryCreate event handler
  eventEmitter_raw.on("npcPoolEntryCreate", async (_, entityId) => {
    const entity = omp.npcs.at(entityId);
    if (entity) {
      omp.npcs.remove_INTERNAL_UNSAFE(entity);
    }

    omp.npcs.add_INTERNAL_UNSAFE(new NPC(entityId));
  });

  // Internal npcPoolEntryDestroy event handler
  eventEmitter_raw.on("npcPoolEntryDestroy", async (_, entityId) => {
    const entity = omp.npcs.at(entityId);
    omp.npcs.remove_INTERNAL_UNSAFE(entity);
  });

  // Internal playerObjectPoolEntryCreate event handler
  eventEmitter_raw.on(
    "playerObjectPoolEntryCreate",
    async (_, playerId, entityId) => {
      const player = omp.players.at(playerId);
      const playerPool = omp.playerObjects.at(playerId);
      if (playerPool && player) {
        const entity = playerPool.at(entityId);
        if (entity) {
          playerPool.remove_INTERNAL_UNSAFE(entity);
        }

        playerPool.add_INTERNAL_UNSAFE(new PlayerObject(player, entityId));
      }
    }
  );

  // Internal playerObjectPoolEntryDestroy event handler
  eventEmitter_raw.on(
    "playerObjectPoolEntryDestroy",
    async (_, playerId, entityId) => {
      const playerPool = omp.playerObjects.at(playerId);
      if (playerPool) {
        const entity = playerPool.at(entityId);
        playerPool.remove_INTERNAL_UNSAFE(entity);
      }
    }
  );

  // Internal playerTextLabelPoolEntryCreate event handler
  eventEmitter_raw.on(
    "playerTextLabelPoolEntryCreate",
    async (_, playerId, entityId) => {
      const player = omp.players.at(playerId);
      const playerPool = omp.playerTextLabels.at(playerId);
      if (playerPool && player) {
        const entity = playerPool.at(entityId);
        if (entity) {
          playerPool.remove_INTERNAL_UNSAFE(entity);
        }

        playerPool.add_INTERNAL_UNSAFE(new PlayerTextLabel(player, entityId));
      }
    }
  );

  // Internal playerTextLabelPoolEntryDestroy event handler
  eventEmitter_raw.on(
    "playerTextLabelPoolEntryDestroy",
    async (_, playerId, entityId) => {
      const playerPool = omp.playerTextLabels.at(playerId);
      if (playerPool) {
        const entity = playerPool.at(entityId);
        playerPool.remove_INTERNAL_UNSAFE(entity);
      }
    }
  );

  // Internal playerTextDrawPoolEntryCreate event handler
  eventEmitter_raw.on(
    "playerTextDrawPoolEntryCreate",
    async (_, playerId, entityId) => {
      const player = omp.players.at(playerId);
      const playerPool = omp.playerTextDraws.at(playerId);
      if (playerPool && player) {
        const entity = playerPool.at(entityId);
        if (entity) {
          playerPool.remove_INTERNAL_UNSAFE(entity);
        }

        playerPool.add_INTERNAL_UNSAFE(new PlayerTextDraw(player, entityId));
      }
    }
  );

  // Internal playerTextDrawPoolEntryDestroy event handler
  eventEmitter_raw.on(
    "playerTextDrawPoolEntryDestroy",
    async (_, playerId, entityId) => {
      const playerPool = omp.playerTextDraws.at(playerId);
      if (playerPool) {
        const entity = playerPool.at(entityId);
        playerPool.remove_INTERNAL_UNSAFE(entity);
      }
    }
  );

  // Internal playerGiveDamageActor event handler
  eventEmitter_raw.on(
    "playerGiveDamageActor",
    async (badRet, player, actor, amount, weapon, part) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerGiveDamageActor. Value: " +
            player
        );
      const actor_ = omp.actors.get(actor);
      if (actor_ === undefined)
        throw new Error(
          "Unable to cast actor to Actor for playerGiveDamageActor. Value: " +
            actor
        );

      return processEventListeners(
        "playerGiveDamageActor",
        badRet,
        player_,
        actor_,
        amount,
        weapon,
        part
      );
    }
  );

  // Internal actorStreamIn event handler
  eventEmitter_raw.on("actorStreamIn", async (badRet, actor, forPlayer) => {
    const actor_ = omp.actors.get(actor);
    if (actor_ === undefined)
      throw new Error(
        "Unable to cast actor to Actor for actorStreamIn. Value: " + actor
      );
    const forPlayer_ = omp.players.get(forPlayer);
    if (forPlayer_ === undefined)
      throw new Error(
        "Unable to cast forPlayer to Player for actorStreamIn. Value: " +
          forPlayer
      );

    return processEventListeners("actorStreamIn", badRet, actor_, forPlayer_);
  });

  // Internal actorStreamOut event handler
  eventEmitter_raw.on("actorStreamOut", async (badRet, actor, forPlayer) => {
    const actor_ = omp.actors.get(actor);
    if (actor_ === undefined)
      throw new Error(
        "Unable to cast actor to Actor for actorStreamOut. Value: " + actor
      );
    const forPlayer_ = omp.players.get(forPlayer);
    if (forPlayer_ === undefined)
      throw new Error(
        "Unable to cast forPlayer to Player for actorStreamOut. Value: " +
          forPlayer
      );

    return processEventListeners("actorStreamOut", badRet, actor_, forPlayer_);
  });

  // Internal playerEnterCheckpoint event handler
  eventEmitter_raw.on("playerEnterCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerEnterCheckpoint. Value: " +
          player
      );

    return processEventListeners("playerEnterCheckpoint", badRet, player_);
  });

  // Internal playerLeaveCheckpoint event handler
  eventEmitter_raw.on("playerLeaveCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerLeaveCheckpoint. Value: " +
          player
      );

    return processEventListeners("playerLeaveCheckpoint", badRet, player_);
  });

  // Internal playerEnterRaceCheckpoint event handler
  eventEmitter_raw.on("playerEnterRaceCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerEnterRaceCheckpoint. Value: " +
          player
      );

    return processEventListeners("playerEnterRaceCheckpoint", badRet, player_);
  });

  // Internal playerLeaveRaceCheckpoint event handler
  eventEmitter_raw.on("playerLeaveRaceCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerLeaveRaceCheckpoint. Value: " +
          player
      );

    return processEventListeners("playerLeaveRaceCheckpoint", badRet, player_);
  });

  // Internal playerRequestClass event handler
  eventEmitter_raw.on("playerRequestClass", async (badRet, player, classId) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerRequestClass. Value: " +
          player
      );

    return processEventListeners(
      "playerRequestClass",
      badRet,
      player_,
      classId
    );
  });

  // Internal consoleText event handler
  eventEmitter_raw.on("consoleText", async (badRet, command, parameters) => {
    return processEventListeners("consoleText", badRet, command, parameters);
  });

  // Internal rconLoginAttempt event handler
  eventEmitter_raw.on(
    "rconLoginAttempt",
    async (badRet, address, password, success) => {
      return processEventListeners(
        "rconLoginAttempt",
        badRet,
        address,
        password,
        success
      );
    }
  );

  // Internal tick event handler
  eventEmitter_raw.on("tick", async (badRet, elapsed) => {
    return processEventListeners("tick", badRet, elapsed);
  });

  // Internal playerFinishedDownloading event handler
  eventEmitter_raw.on(
    "playerFinishedDownloading",
    async (badRet, player, vw) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerFinishedDownloading. Value: " +
            player
        );

      return processEventListeners(
        "playerFinishedDownloading",
        badRet,
        player_,
        vw
      );
    }
  );

  // Internal playerRequestDownload event handler
  eventEmitter_raw.on(
    "playerRequestDownload",
    async (badRet, player, type, checksum) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerRequestDownload. Value: " +
            player
        );

      return processEventListeners(
        "playerRequestDownload",
        badRet,
        player_,
        type,
        checksum
      );
    }
  );

  // Internal dialogResponse event handler
  eventEmitter_raw.on(
    "dialogResponse",
    async (badRet, player, dialogId, response, listItem, inputText) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for dialogResponse. Value: " + player
        );

      return processEventListeners(
        "dialogResponse",
        badRet,
        player_,
        dialogId,
        response,
        listItem,
        inputText
      );
    }
  );

  // Internal playerEnterGangZone event handler
  eventEmitter_raw.on("playerEnterGangZone", async (badRet, player, zone) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerEnterGangZone. Value: " +
          player
      );
    const zone_ = omp.gangzones.get(zone);
    if (zone_ === undefined)
      throw new Error(
        "Unable to cast zone to GangZone for playerEnterGangZone. Value: " +
          zone
      );

    return processEventListeners("playerEnterGangZone", badRet, player_, zone_);
  });

  // Internal playerLeaveGangZone event handler
  eventEmitter_raw.on("playerLeaveGangZone", async (badRet, player, zone) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerLeaveGangZone. Value: " +
          player
      );
    const zone_ = omp.gangzones.get(zone);
    if (zone_ === undefined)
      throw new Error(
        "Unable to cast zone to GangZone for playerLeaveGangZone. Value: " +
          zone
      );

    return processEventListeners("playerLeaveGangZone", badRet, player_, zone_);
  });

  // Internal playerClickGangZone event handler
  eventEmitter_raw.on("playerClickGangZone", async (badRet, player, zone) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerClickGangZone. Value: " +
          player
      );
    const zone_ = omp.gangzones.get(zone);
    if (zone_ === undefined)
      throw new Error(
        "Unable to cast zone to GangZone for playerClickGangZone. Value: " +
          zone
      );

    return processEventListeners("playerClickGangZone", badRet, player_, zone_);
  });

  // Internal playerSelectedMenuRow event handler
  eventEmitter_raw.on("playerSelectedMenuRow", async (badRet, player, row) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerSelectedMenuRow. Value: " +
          player
      );

    return processEventListeners("playerSelectedMenuRow", badRet, player_, row);
  });

  // Internal playerExitedMenu event handler
  eventEmitter_raw.on("playerExitedMenu", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerExitedMenu. Value: " + player
      );

    return processEventListeners("playerExitedMenu", badRet, player_);
  });

  // Internal objectMove event handler
  eventEmitter_raw.on("objectMove", async (badRet, object) => {
    const object_ = omp.objects.get(object);
    if (object_ === undefined)
      throw new Error(
        "Unable to cast object to Object for objectMove. Value: " + object
      );

    return processEventListeners("objectMove", badRet, object_);
  });

  // Internal playerObjectMove event handler
  eventEmitter_raw.on("playerObjectMove", async (badRet, player, object) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerObjectMove. Value: " + player
      );
    const object_ = omp.objects.get(object);
    if (object_ === undefined)
      throw new Error(
        "Unable to cast object to Object for playerObjectMove. Value: " + object
      );

    return processEventListeners("playerObjectMove", badRet, player_, object_);
  });

  // Internal playerEditObject event handler
  eventEmitter_raw.on(
    "playerEditObject",
    async (
      badRet,
      player,
      object,
      response,
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ
    ) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerEditObject. Value: " +
            player
        );
      const object_ = omp.objects.get(object);
      if (object_ === undefined)
        throw new Error(
          "Unable to cast object to Object for playerEditObject. Value: " +
            object
        );

      return processEventListeners(
        "playerEditObject",
        badRet,
        player_,
        object_,
        response,
        offsetX,
        offsetY,
        offsetZ,
        rotationX,
        rotationY,
        rotationZ
      );
    }
  );

  // Internal playerEditPlayerObject event handler
  eventEmitter_raw.on(
    "playerEditPlayerObject",
    async (
      badRet,
      player,
      object,
      response,
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ
    ) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerEditPlayerObject. Value: " +
            player
        );
      const object_ = omp.objects.get(object);
      if (object_ === undefined)
        throw new Error(
          "Unable to cast object to Object for playerEditPlayerObject. Value: " +
            object
        );

      return processEventListeners(
        "playerEditPlayerObject",
        badRet,
        player_,
        object_,
        response,
        offsetX,
        offsetY,
        offsetZ,
        rotationX,
        rotationY,
        rotationZ
      );
    }
  );

  // Internal playerEditAttachedObject event handler
  eventEmitter_raw.on(
    "playerEditAttachedObject",
    async (
      badRet,
      player,
      saved,
      index,
      model,
      bone,
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ,
      scaleX,
      scaleY,
      scaleZ
    ) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerEditAttachedObject. Value: " +
            player
        );

      return processEventListeners(
        "playerEditAttachedObject",
        badRet,
        player_,
        saved,
        index,
        model,
        bone,
        offsetX,
        offsetY,
        offsetZ,
        rotationX,
        rotationY,
        rotationZ,
        scaleX,
        scaleY,
        scaleZ
      );
    }
  );

  // Internal playerSelectObject event handler
  eventEmitter_raw.on(
    "playerSelectObject",
    async (badRet, player, object, model, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerSelectObject. Value: " +
            player
        );
      const object_ = omp.objects.get(object);
      if (object_ === undefined)
        throw new Error(
          "Unable to cast object to Object for playerSelectObject. Value: " +
            object
        );

      return processEventListeners(
        "playerSelectObject",
        badRet,
        player_,
        object_,
        model,
        x,
        y,
        z
      );
    }
  );

  // Internal playerSelectPlayerObject event handler
  eventEmitter_raw.on(
    "playerSelectPlayerObject",
    async (badRet, player, object, model, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerSelectPlayerObject. Value: " +
            player
        );
      const object_ = omp.objects.get(object);
      if (object_ === undefined)
        throw new Error(
          "Unable to cast object to Object for playerSelectPlayerObject. Value: " +
            object
        );

      return processEventListeners(
        "playerSelectPlayerObject",
        badRet,
        player_,
        object_,
        model,
        x,
        y,
        z
      );
    }
  );

  // Internal playerPickUpPickup event handler
  eventEmitter_raw.on("playerPickUpPickup", async (badRet, player, pickup) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerPickUpPickup. Value: " +
          player
      );
    const pickup_ = omp.players.get(pickup);
    if (pickup_ === undefined)
      throw new Error(
        "Unable to cast pickup to Pickup for playerPickUpPickup. Value: " +
          pickup
      );

    return processEventListeners(
      "playerPickUpPickup",
      badRet,
      player_,
      pickup_
    );
  });

  // Internal playerCancelTextDrawSelection event handler
  eventEmitter_raw.on(
    "playerCancelTextDrawSelection",
    async (badRet, player) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerCancelTextDrawSelection. Value: " +
            player
        );

      return processEventListeners(
        "playerCancelTextDrawSelection",
        badRet,
        player_
      );
    }
  );

  // Internal playerCancelPlayerTextDrawSelection event handler
  eventEmitter_raw.on(
    "playerCancelPlayerTextDrawSelection",
    async (badRet, player) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerCancelPlayerTextDrawSelection. Value: " +
            player
        );

      return processEventListeners(
        "playerCancelPlayerTextDrawSelection",
        badRet,
        player_
      );
    }
  );

  // Internal playerClickTextDraw event handler
  eventEmitter_raw.on(
    "playerClickTextDraw",
    async (badRet, player, textdraw) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerClickTextDraw. Value: " +
            player
        );
      const textdraw_ = omp.textdraws.get(textdraw);
      if (textdraw_ === undefined)
        throw new Error(
          "Unable to cast textdraw to TextDraw for playerClickTextDraw. Value: " +
            textdraw
        );

      return processEventListeners(
        "playerClickTextDraw",
        badRet,
        player_,
        textdraw_
      );
    }
  );

  // Internal playerClickPlayerTextDraw event handler
  eventEmitter_raw.on(
    "playerClickPlayerTextDraw",
    async (badRet, player, textdraw) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerClickPlayerTextDraw. Value: " +
            player
        );
      const textdraw_ = omp.textdraws.get(textdraw);
      if (textdraw_ === undefined)
        throw new Error(
          "Unable to cast textdraw to TextDraw for playerClickPlayerTextDraw. Value: " +
            textdraw
        );

      return processEventListeners(
        "playerClickPlayerTextDraw",
        badRet,
        player_,
        textdraw_
      );
    }
  );

  // Internal playerConnect event handler
  eventEmitter_raw.on("playerConnect", async (badRet, player) => {
    let player_ = omp.players.get(player);
    if (player_ === undefined) {
      const result = internal_omp.Player.GetID(player);
      const playerEntity = new Player(result.ret);
      if (playerEntity === undefined)
        throw new Error(
          "Unable to cast player to Player for incomingConnection. Value: " +
            player
        );

      omp.players.add_INTERNAL_UNSAFE(playerEntity);
      player_ = playerEntity;
    }

    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerConnect. Value: " + player
      );

    return processEventListeners("playerConnect", badRet, player_);
  });

  // Internal playerSpawn event handler
  eventEmitter_raw.on("playerSpawn", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerSpawn. Value: " + player
      );

    return processEventListeners("playerSpawn", badRet, player_);
  });

  // Internal playerCommandText event handler
  eventEmitter_raw.on("playerCommandText", async (badRet, player, command) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerCommandText. Value: " +
          player
      );

    return processEventListeners("playerCommandText", badRet, player_, command);
  });

  // Internal playerKeyStateChange event handler
  eventEmitter_raw.on(
    "playerKeyStateChange",
    async (badRet, player, newKeys, oldKeys) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerKeyStateChange. Value: " +
            player
        );

      return processEventListeners(
        "playerKeyStateChange",
        badRet,
        player_,
        newKeys,
        oldKeys
      );
    }
  );

  // Internal incomingConnection event handler
  eventEmitter_raw.on(
    "incomingConnection",
    async (badRet, player, ipAddress, port) => {
      const result = internal_omp.Player.GetID(player);
      const playerEntity = new Player(result.ret);
      if (playerEntity === undefined)
        throw new Error(
          "Unable to cast player to Player for incomingConnection. Value: " +
            player
        );

      omp.players.add_INTERNAL_UNSAFE(playerEntity);
      const player_ = playerEntity;

      return processEventListeners(
        "incomingConnection",
        badRet,
        player_,
        ipAddress,
        port
      );
    }
  );

  // Internal playerDisconnect event handler
  eventEmitter_raw.on("playerDisconnect", async (badRet, player, reason) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerDisconnect. Value: " + player
      );

    await processEventListeners("playerDisconnect", badRet, player_, reason);
    omp.players.remove_INTERNAL_UNSAFE(player_);
  });

  // Internal playerRequestSpawn event handler
  eventEmitter_raw.on("playerRequestSpawn", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerRequestSpawn. Value: " +
          player
      );

    return processEventListeners("playerRequestSpawn", badRet, player_);
  });

  // Internal playerStreamIn event handler
  eventEmitter_raw.on("playerStreamIn", async (badRet, player, forPlayer) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerStreamIn. Value: " + player
      );
    const forPlayer_ = omp.players.get(forPlayer);
    if (forPlayer_ === undefined)
      throw new Error(
        "Unable to cast forPlayer to Player for playerStreamIn. Value: " +
          forPlayer
      );

    return processEventListeners("playerStreamIn", badRet, player_, forPlayer_);
  });

  // Internal playerStreamOut event handler
  eventEmitter_raw.on("playerStreamOut", async (badRet, player, forPlayer) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerStreamOut. Value: " + player
      );
    const forPlayer_ = omp.players.get(forPlayer);
    if (forPlayer_ === undefined)
      throw new Error(
        "Unable to cast forPlayer to Player for playerStreamOut. Value: " +
          forPlayer
      );

    return processEventListeners(
      "playerStreamOut",
      badRet,
      player_,
      forPlayer_
    );
  });

  // Internal playerText event handler
  eventEmitter_raw.on("playerText", async (badRet, player, text) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerText. Value: " + player
      );

    return processEventListeners("playerText", badRet, player_, text);
  });

  // Internal playerShotMissed event handler
  eventEmitter_raw.on(
    "playerShotMissed",
    async (badRet, player, weapon, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerShotMissed. Value: " +
            player
        );

      return processEventListeners(
        "playerShotMissed",
        badRet,
        player_,
        weapon,
        x,
        y,
        z
      );
    }
  );

  // Internal playerShotPlayer event handler
  eventEmitter_raw.on(
    "playerShotPlayer",
    async (badRet, player, target, weapon, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerShotPlayer. Value: " +
            player
        );
      const target_ = omp.players.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to Player for playerShotPlayer. Value: " +
            target
        );

      return processEventListeners(
        "playerShotPlayer",
        badRet,
        player_,
        target_,
        weapon,
        x,
        y,
        z
      );
    }
  );

  // Internal playerShotVehicle event handler
  eventEmitter_raw.on(
    "playerShotVehicle",
    async (badRet, player, target, weapon, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerShotVehicle. Value: " +
            player
        );
      const target_ = omp.vehicles.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to Vehicle for playerShotVehicle. Value: " +
            target
        );

      return processEventListeners(
        "playerShotVehicle",
        badRet,
        player_,
        target_,
        weapon,
        x,
        y,
        z
      );
    }
  );

  // Internal playerShotObject event handler
  eventEmitter_raw.on(
    "playerShotObject",
    async (badRet, player, target, weapon, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerShotObject. Value: " +
            player
        );
      const target_ = omp.objects.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to Object for playerShotObject. Value: " +
            target
        );

      return processEventListeners(
        "playerShotObject",
        badRet,
        player_,
        target_,
        weapon,
        x,
        y,
        z
      );
    }
  );

  // Internal playerShotPlayerObject event handler
  eventEmitter_raw.on(
    "playerShotPlayerObject",
    async (badRet, player, target, weapon, x, y, z) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerShotPlayerObject. Value: " +
            player
        );

      const playerObjects = omp.playerObjects.at(player_.getID());
      if (playerObjects === undefined)
        throw new Error(
          "Unable to get player's PlayerObject pool for playerShotPlayerObject. Value: " +
            target
        );

      const target_ = playerObjects.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to PlayerObject for playerShotPlayerObject. Value: " +
            target
        );

      return processEventListeners(
        "playerShotPlayerObject",
        badRet,
        player_,
        target_,
        weapon,
        x,
        y,
        z
      );
    }
  );

  // Internal playerDeath event handler
  eventEmitter_raw.on("playerDeath", async (badRet, player, killer, reason) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerDeath. Value: " + player
      );

    const killer_ = omp.players.get(killer);

    return processEventListeners(
      "playerDeath",
      badRet,
      player_,
      killer_,
      reason
    );
  });

  // Internal playerTakeDamage event handler
  eventEmitter_raw.on(
    "playerTakeDamage",
    async (badRet, player, from, amount, weapon, bodypart) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerTakeDamage. Value: " +
            player
        );

      const from_ = omp.players.get(from);

      return processEventListeners(
        "playerTakeDamage",
        badRet,
        player_,
        from_,
        amount,
        weapon,
        bodypart
      );
    }
  );

  // Internal playerGiveDamage event handler
  eventEmitter_raw.on(
    "playerGiveDamage",
    async (badRet, player, to, amount, weapon, bodypart) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerGiveDamage. Value: " +
            player
        );
      const to_ = omp.players.get(to);
      if (to_ === undefined)
        throw new Error(
          "Unable to cast to to Player for playerGiveDamage. Value: " + to
        );

      return processEventListeners(
        "playerGiveDamage",
        badRet,
        player_,
        to_,
        amount,
        weapon,
        bodypart
      );
    }
  );

  // Internal playerInteriorChange event handler
  eventEmitter_raw.on(
    "playerInteriorChange",
    async (badRet, player, newInterior, oldInterior) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerInteriorChange. Value: " +
            player
        );

      return processEventListeners(
        "playerInteriorChange",
        badRet,
        player_,
        newInterior,
        oldInterior
      );
    }
  );

  // Internal playerStateChange event handler
  eventEmitter_raw.on(
    "playerStateChange",
    async (badRet, player, newState, oldState) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerStateChange. Value: " +
            player
        );

      return processEventListeners(
        "playerStateChange",
        badRet,
        player_,
        newState,
        oldState
      );
    }
  );

  // Internal playerClickMap event handler
  eventEmitter_raw.on("playerClickMap", async (badRet, player, x, y, z) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerClickMap. Value: " + player
      );

    return processEventListeners("playerClickMap", badRet, player_, x, y, z);
  });

  // Internal playerClickPlayer event handler
  eventEmitter_raw.on(
    "playerClickPlayer",
    async (badRet, player, clicked, source) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerClickPlayer. Value: " +
            player
        );
      const clicked_ = omp.players.get(clicked);
      if (clicked_ === undefined)
        throw new Error(
          "Unable to cast clicked to Player for playerClickPlayer. Value: " +
            clicked
        );

      return processEventListeners(
        "playerClickPlayer",
        badRet,
        player_,
        clicked_,
        source
      );
    }
  );

  // Internal clientCheckResponse event handler
  eventEmitter_raw.on(
    "clientCheckResponse",
    async (badRet, player, actionType, address, result_) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for clientCheckResponse. Value: " +
            player
        );

      return processEventListeners(
        "clientCheckResponse",
        badRet,
        player_,
        actionType,
        address,
        result_
      );
    }
  );

  // Internal playerUpdate event handler
  eventEmitter_raw.on("playerUpdate", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerUpdate. Value: " + player
      );

    return processEventListeners("playerUpdate", badRet, player_);
  });

  // Internal vehicleStreamIn event handler
  eventEmitter_raw.on("vehicleStreamIn", async (badRet, vehicle, player) => {
    const vehicle_ = omp.vehicles.get(vehicle);
    if (vehicle_ === undefined)
      throw new Error(
        "Unable to cast vehicle to Vehicle for vehicleStreamIn. Value: " +
          vehicle
      );
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for vehicleStreamIn. Value: " + player
      );

    return processEventListeners("vehicleStreamIn", badRet, vehicle_, player_);
  });

  // Internal vehicleStreamOut event handler
  eventEmitter_raw.on("vehicleStreamOut", async (badRet, vehicle, player) => {
    const vehicle_ = omp.vehicles.get(vehicle);
    if (vehicle_ === undefined)
      throw new Error(
        "Unable to cast vehicle to Vehicle for vehicleStreamOut. Value: " +
          vehicle
      );
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for vehicleStreamOut. Value: " + player
      );

    return processEventListeners("vehicleStreamOut", badRet, vehicle_, player_);
  });

  // Internal vehicleDeath event handler
  eventEmitter_raw.on("vehicleDeath", async (badRet, vehicle, player) => {
    const vehicle_ = omp.vehicles.get(vehicle);
    if (vehicle_ === undefined)
      throw new Error(
        "Unable to cast vehicle to Vehicle for vehicleDeath. Value: " + vehicle
      );
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for vehicleDeath. Value: " + player
      );

    return processEventListeners("vehicleDeath", badRet, vehicle_, player_);
  });

  // Internal playerEnterVehicle event handler
  eventEmitter_raw.on(
    "playerEnterVehicle",
    async (badRet, player, vehicle, passenger) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for playerEnterVehicle. Value: " +
            player
        );
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for playerEnterVehicle. Value: " +
            vehicle
        );

      return processEventListeners(
        "playerEnterVehicle",
        badRet,
        player_,
        vehicle_,
        passenger
      );
    }
  );

  // Internal playerExitVehicle event handler
  eventEmitter_raw.on("playerExitVehicle", async (badRet, player, vehicle) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerExitVehicle. Value: " +
          player
      );
    const vehicle_ = omp.vehicles.get(vehicle);
    if (vehicle_ === undefined)
      throw new Error(
        "Unable to cast vehicle to Vehicle for playerExitVehicle. Value: " +
          vehicle
      );

    return processEventListeners(
      "playerExitVehicle",
      badRet,
      player_,
      vehicle_
    );
  });

  // Internal vehicleDamageStatusUpdate event handler
  eventEmitter_raw.on(
    "vehicleDamageStatusUpdate",
    async (badRet, vehicle, player) => {
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for vehicleDamageStatusUpdate. Value: " +
            vehicle
        );
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for vehicleDamageStatusUpdate. Value: " +
            player
        );

      return processEventListeners(
        "vehicleDamageStatusUpdate",
        badRet,
        vehicle_,
        player_
      );
    }
  );

  // Internal vehiclePaintJob event handler
  eventEmitter_raw.on(
    "vehiclePaintJob",
    async (badRet, player, vehicle, paintJob) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for vehiclePaintJob. Value: " +
            player
        );
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for vehiclePaintJob. Value: " +
            vehicle
        );

      return processEventListeners(
        "vehiclePaintJob",
        badRet,
        player_,
        vehicle_,
        paintJob
      );
    }
  );

  // Internal vehicleMod event handler
  eventEmitter_raw.on(
    "vehicleMod",
    async (badRet, player, vehicle, component) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for vehicleMod. Value: " + player
        );
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for vehicleMod. Value: " + vehicle
        );

      return processEventListeners(
        "vehicleMod",
        badRet,
        player_,
        vehicle_,
        component
      );
    }
  );

  // Internal vehicleRespray event handler
  eventEmitter_raw.on(
    "vehicleRespray",
    async (badRet, player, vehicle, color1, color2) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for vehicleRespray. Value: " + player
        );
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for vehicleRespray. Value: " +
            vehicle
        );

      return processEventListeners(
        "vehicleRespray",
        badRet,
        player_,
        vehicle_,
        color1,
        color2
      );
    }
  );

  // Internal enterExitModShop event handler
  eventEmitter_raw.on(
    "enterExitModShop",
    async (badRet, player, enterexit, interiorId) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for enterExitModShop. Value: " +
            player
        );

      return processEventListeners(
        "enterExitModShop",
        badRet,
        player_,
        enterexit,
        interiorId
      );
    }
  );

  // Internal vehicleSpawn event handler
  eventEmitter_raw.on("vehicleSpawn", async (badRet, vehicle) => {
    const vehicle_ = omp.vehicles.get(vehicle);
    if (vehicle_ === undefined)
      throw new Error(
        "Unable to cast vehicle to Vehicle for vehicleSpawn. Value: " + vehicle
      );

    return processEventListeners("vehicleSpawn", badRet, vehicle_);
  });

  // Internal unoccupiedVehicleUpdate event handler
  eventEmitter_raw.on(
    "unoccupiedVehicleUpdate",
    async (
      badRet,
      vehicle,
      player,
      seat,
      posX,
      posY,
      posZ,
      velocityX,
      velocityY,
      velocityZ
    ) => {
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for unoccupiedVehicleUpdate. Value: " +
            vehicle
        );
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for unoccupiedVehicleUpdate. Value: " +
            player
        );

      return processEventListeners(
        "unoccupiedVehicleUpdate",
        badRet,
        vehicle_,
        player_,
        seat,
        posX,
        posY,
        posZ,
        velocityX,
        velocityY,
        velocityZ
      );
    }
  );

  // Internal trailerUpdate event handler
  eventEmitter_raw.on("trailerUpdate", async (badRet, player, trailer) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for trailerUpdate. Value: " + player
      );
    const trailer_ = omp.vehicles.get(trailer);
    if (trailer_ === undefined)
      throw new Error(
        "Unable to cast trailer to Vehicle for trailerUpdate. Value: " + trailer
      );

    return processEventListeners("trailerUpdate", badRet, player_, trailer_);
  });

  // Internal vehicleSirenStateChange event handler
  eventEmitter_raw.on(
    "vehicleSirenStateChange",
    async (badRet, player, vehicle, sirenState) => {
      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for vehicleSirenStateChange. Value: " +
            player
        );
      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for vehicleSirenStateChange. Value: " +
            vehicle
        );

      return processEventListeners(
        "vehicleSirenStateChange",
        badRet,
        player_,
        vehicle_,
        sirenState
      );
    }
  );

  // Internal npcFinishMove event handler
  eventEmitter_raw.on("npcFinishMove", async (badRet, npc) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcFinishMove. Value: " + npc
      );

    return processEventListeners("npcFinishMove", badRet, npc_);
  });

  // Internal npcCreate event handler
  eventEmitter_raw.on("npcCreate", async (badRet, npc) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error("Unable to cast npc to NPC for npcCreate. Value: " + npc);

    return processEventListeners("npcCreate", badRet, npc_);
  });

  // Internal npcDestroy event handler
  eventEmitter_raw.on("npcDestroy", async (badRet, npc) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcDestroy. Value: " + npc
      );

    return processEventListeners("npcDestroy", badRet, npc_);
  });

  // Internal npcWeaponStateChange event handler
  eventEmitter_raw.on(
    "npcWeaponStateChange",
    async (badRet, npc, newState, oldState) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcWeaponStateChange. Value: " + npc
        );

      return processEventListeners(
        "npcWeaponStateChange",
        badRet,
        npc_,
        newState,
        oldState
      );
    }
  );

  // Internal npcTakeDamage event handler
  eventEmitter_raw.on(
    "npcTakeDamage",
    async (badRet, npc, damager, damage, weapon, bodyPart) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcTakeDamage. Value: " + npc
        );

      const damager_ = omp.players.get(damager);
      if (damager_ === undefined)
        throw new Error(
          "Unable to cast damager to Player for npcTakeDamage. Value: " +
            damager
        );

      return processEventListeners(
        "npcTakeDamage",
        badRet,
        npc_,
        damager_,
        damage,
        weapon,
        bodyPart
      );
    }
  );

  // Internal npcGiveDamage event handler
  eventEmitter_raw.on(
    "npcGiveDamage",
    async (badRet, npc, damaged, damage, weapon, bodyPart) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcGiveDamage. Value: " + npc
        );

      const damaged_ = omp.players.get(damaged);
      if (damaged_ === undefined)
        throw new Error(
          "Unable to cast damaged to Player for npcGiveDamage. Value: " +
            damaged
        );

      return processEventListeners(
        "npcGiveDamage",
        badRet,
        npc_,
        damaged_,
        damage,
        weapon,
        bodyPart
      );
    }
  );

  // Internal npcDeath event handler
  eventEmitter_raw.on("npcDeath", async (badRet, npc, killer, reason) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error("Unable to cast npc to NPC for npcDeath. Value: " + npc);

    const killer_ = omp.players.get(killer);

    return processEventListeners("npcDeath", badRet, npc_, killer_, reason);
  });

  // Internal npcSpawn event handler
  eventEmitter_raw.on("npcSpawn", async (badRet, npc) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error("Unable to cast npc to NPC for npcSpawn. Value: " + npc);

    return processEventListeners("npcSpawn", badRet, npc_);
  });

  // Internal npcRespawn event handler
  eventEmitter_raw.on("npcRespawn", async (badRet, npc) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcRespawn. Value: " + npc
      );

    return processEventListeners("npcRespawn", badRet, npc_);
  });

  // Internal npcPlaybackStart event handler
  eventEmitter_raw.on("npcPlaybackStart", async (badRet, npc, recordId) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcPlaybackStart. Value: " + npc
      );

    return processEventListeners("npcPlaybackStart", badRet, npc_, recordId);
  });

  // Internal npcPlaybackEnd event handler
  eventEmitter_raw.on("npcPlaybackEnd", async (badRet, npc, recordId) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcPlaybackEnd. Value: " + npc
      );

    return processEventListeners("npcPlaybackEnd", badRet, npc_, recordId);
  });

  // Internal npcShotMissed event handler
  eventEmitter_raw.on(
    "npcShotMissed",
    async (badRet, npc, weapon, offsetX, offsetY, offsetZ) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcShotMissed. Value: " + npc
        );

      return processEventListeners(
        "npcShotMissed",
        badRet,
        npc_,
        weapon,
        offsetX,
        offsetY,
        offsetZ
      );
    }
  );

  // Internal npcShotPlayer event handler
  eventEmitter_raw.on(
    "npcShotPlayer",
    async (badRet, npc, player, weapon, offsetX, offsetY, offsetZ) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcShotPlayer. Value: " + npc
        );

      const player_ = omp.players.get(player);
      if (player_ === undefined)
        throw new Error(
          "Unable to cast player to Player for npcShotPlayer. Value: " + player
        );

      return processEventListeners(
        "npcShotPlayer",
        badRet,
        npc_,
        player_,
        weapon,
        offsetX,
        offsetY,
        offsetZ
      );
    }
  );

  // Internal npcShotNPC event handler
  eventEmitter_raw.on(
    "npcShotNPC",
    async (badRet, npc, npcTarget, weapon, offsetX, offsetY, offsetZ) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcShotNPC. Value: " + npc
        );

      const npcTarget_ = omp.npcs.get(npcTarget);
      if (npcTarget_ === undefined)
        throw new Error(
          "Unable to cast npcTarget to NPC for npcShotNPC. Value: " + npcTarget
        );

      return processEventListeners(
        "npcShotNPC",
        badRet,
        npc_,
        npcTarget_,
        weapon,
        offsetX,
        offsetY,
        offsetZ
      );
    }
  );

  // Internal npcShotVehicle event handler
  eventEmitter_raw.on(
    "npcShotVehicle",
    async (badRet, npc, vehicle, weapon, offsetX, offsetY, offsetZ) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcShotVehicle. Value: " + npc
        );

      const vehicle_ = omp.vehicles.get(vehicle);
      if (vehicle_ === undefined)
        throw new Error(
          "Unable to cast vehicle to Vehicle for npcShotVehicle. Value: " +
            vehicle
        );

      return processEventListeners(
        "npcShotVehicle",
        badRet,
        npc_,
        vehicle_,
        weapon,
        offsetX,
        offsetY,
        offsetZ
      );
    }
  );

  // Internal npcShotObject event handler
  eventEmitter_raw.on(
    "npcShotObject",
    async (badRet, npc, object, weapon, offsetX, offsetY, offsetZ) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcShotObject. Value: " + npc
        );

      const object_ = omp.objects.get(object);
      if (object_ === undefined)
        throw new Error(
          "Unable to cast object to Object for npcShotObject. Value: " + object
        );

      return processEventListeners(
        "npcShotObject",
        badRet,
        npc_,
        object_,
        weapon,
        offsetX,
        offsetY,
        offsetZ
      );
    }
  );

  // Internal npcShotPlayerObject event handler
  eventEmitter_raw.on(
    "npcShotPlayerObject",
    async (badRet, npc, playerObject, weapon, offsetX, offsetY, offsetZ) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcShotPlayerObject. Value: " + npc
        );

      const playerInstance_ = npc_.getPlayer();
      if (playerInstance_ === undefined)
        throw new Error(
          "Unable to NPC player instance in npcShotPlayerObject. Value: " + npc
        );

      const playerObjects = omp.playerObjects.at(playerInstance_.getID());
      if (playerObjects === undefined)
        throw new Error(
          "Unable to get player's PlayerObject pool for playerShotPlayerObject. Value: " +
            target
        );

      const playerObject_ = playerObjects.get(playerObject);
      if (playerObject_ === undefined)
        throw new Error(
          "Unable to cast playerObject to PlayerObject for npcShotPlayerObject. Value: " +
            playerObject
        );

      return processEventListeners(
        "npcShotPlayerObject",
        badRet,
        npc_,
        playerObject_,
        weapon,
        offsetX,
        offsetY,
        offsetZ
      );
    }
  );

  // Internal npcFinishNodePoint event handler
  eventEmitter_raw.on(
    "npcFinishNodePoint",
    async (badRet, npc, nodeId, pointId) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcFinishNodePoint. Value: " + npc
        );

      return processEventListeners(
        "npcFinishNodePoint",
        badRet,
        npc_,
        nodeId,
        pointId
      );
    }
  );

  // Internal npcFinishNode event handler
  eventEmitter_raw.on("npcFinishNode", async (badRet, npc, nodeId) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcFinishNode. Value: " + npc
      );

    return processEventListeners("npcFinishNode", badRet, npc_, nodeId);
  });

  // Internal npcChangeNode event handler
  eventEmitter_raw.on(
    "npcChangeNode",
    async (badRet, npc, newNodeId, oldNodeId) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcChangeNode. Value: " + npc
        );

      return processEventListeners(
        "npcChangeNode",
        badRet,
        npc_,
        newNodeId,
        oldNodeId
      );
    }
  );

  // Internal npcFinishMovePath event handler
  eventEmitter_raw.on("npcFinishMovePath", async (badRet, npc, pathId) => {
    const npc_ = omp.npcs.get(npc);
    if (npc_ === undefined)
      throw new Error(
        "Unable to cast npc to NPC for npcFinishMovePath. Value: " + npc
      );

    return processEventListeners("npcFinishMovePath", badRet, npc_, pathId);
  });

  // Internal npcFinishMovePathPoint event handler
  eventEmitter_raw.on(
    "npcFinishMovePathPoint",
    async (badRet, npc, pathId, pointId) => {
      const npc_ = omp.npcs.get(npc);
      if (npc_ === undefined)
        throw new Error(
          "Unable to cast npc to NPC for npcFinishMovePathPoint. Value: " + npc
        );

      return processEventListeners(
        "npcFinishMovePathPoint",
        badRet,
        npc_,
        pathId,
        pointId
      );
    }
  );
};
