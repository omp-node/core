// @ts-nocheck

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
import EventEmitter from "events";
import { internal_omp, omp } from "./globals.js";

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

  // Internal playerObjectPoolEntryCreate event handler
  eventEmitter_raw.on(
    "playerObjectPoolEntryCreate",
    async (_, playerId, entityId) => {
      const player = omp.players(playerId);
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
  eventEmitter_raw.on("playerObjectPoolEntryDestroy", async (_, entityId) => {
    const playerPool = omp.playerObjects.at(playerId);
    if (playerPool) {
      const entity = playerPool.at(entityId);
      playerPool.remove_INTERNAL_UNSAFE(entity);
    }
  });

  // Internal playerTextLabelPoolEntryCreate event handler
  eventEmitter_raw.on(
    "playerTextLabelPoolEntryCreate",
    async (_, playerId, entityId) => {
      const player = omp.players(playerId);
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
    async (_, entityId) => {
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
      const player = omp.players(playerId);
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
  eventEmitter_raw.on("playerTextDrawPoolEntryDestroy", async (_, entityId) => {
    const playerPool = omp.playerTextDraws.at(playerId);
    if (playerPool) {
      const entity = playerPool.at(entityId);
      playerPool.remove_INTERNAL_UNSAFE(entity);
    }
  });

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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerGiveDamageActor"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, actor_, amount, weapon, part);
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
    const listeners = __internal_omp.eventEmitter.listeners("actorStreamIn");
    let result = true;
    for (const listener of listeners) {
      result = await listener(actor_, forPlayer_);
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
    const listeners = __internal_omp.eventEmitter.listeners("actorStreamOut");
    let result = true;
    for (const listener of listeners) {
      result = await listener(actor_, forPlayer_);
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
  });

  // Internal playerEnterCheckpoint event handler
  eventEmitter_raw.on("playerEnterCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerEnterCheckpoint. Value: " +
          player
      );
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerEnterCheckpoint"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal playerLeaveCheckpoint event handler
  eventEmitter_raw.on("playerLeaveCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerLeaveCheckpoint. Value: " +
          player
      );
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerLeaveCheckpoint"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal playerEnterRaceCheckpoint event handler
  eventEmitter_raw.on("playerEnterRaceCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerEnterRaceCheckpoint. Value: " +
          player
      );
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerEnterRaceCheckpoint"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal playerLeaveRaceCheckpoint event handler
  eventEmitter_raw.on("playerLeaveRaceCheckpoint", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerLeaveRaceCheckpoint. Value: " +
          player
      );
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerLeaveRaceCheckpoint"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal playerRequestClass event handler
  eventEmitter_raw.on("playerRequestClass", async (badRet, player, classId) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerRequestClass. Value: " +
          player
      );
    const listeners =
      __internal_omp.eventEmitter.listeners("playerRequestClass");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, classId);
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
  });

  // Internal consoleText event handler
  eventEmitter_raw.on("consoleText", async (badRet, command, parameters) => {
    const listeners = __internal_omp.eventEmitter.listeners("consoleText");
    let result = true;
    for (const listener of listeners) {
      result = await listener(command, parameters);
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
  });

  // Internal rconLoginAttempt event handler
  eventEmitter_raw.on(
    "rconLoginAttempt",
    async (badRet, address, password, success) => {
      const listeners =
        __internal_omp.eventEmitter.listeners("rconLoginAttempt");
      let result = true;
      for (const listener of listeners) {
        result = await listener(address, password, success);
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
    }
  );

  // Internal tick event handler
  eventEmitter_raw.on("tick", async (badRet, elapsed) => {
    const listeners = __internal_omp.eventEmitter.listeners("tick");
    let result = true;
    for (const listener of listeners) {
      result = await listener(elapsed);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerFinishedDownloading"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, vw);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerRequestDownload"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, type, checksum);
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
      const listeners = __internal_omp.eventEmitter.listeners("dialogResponse");
      let result = true;
      for (const listener of listeners) {
        result = await listener(
          player_,
          dialogId,
          response,
          listItem,
          inputText
        );
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
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerEnterGangZone"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, zone_);
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
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerLeaveGangZone"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, zone_);
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
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerClickGangZone"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, zone_);
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
  });

  // Internal playerSelectedMenuRow event handler
  eventEmitter_raw.on("playerSelectedMenuRow", async (badRet, player, row) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerSelectedMenuRow. Value: " +
          player
      );
    const listeners = __internal_omp.eventEmitter.listeners(
      "playerSelectedMenuRow"
    );
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, row);
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
  });

  // Internal playerExitedMenu event handler
  eventEmitter_raw.on("playerExitedMenu", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerExitedMenu. Value: " + player
      );
    const listeners = __internal_omp.eventEmitter.listeners("playerExitedMenu");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal objectMove event handler
  eventEmitter_raw.on("objectMove", async (badRet, object) => {
    const object_ = omp.objects.get(object);
    if (object_ === undefined)
      throw new Error(
        "Unable to cast object to Object for objectMove. Value: " + object
      );
    const listeners = __internal_omp.eventEmitter.listeners("objectMove");
    let result = true;
    for (const listener of listeners) {
      result = await listener(object_);
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
    const listeners = __internal_omp.eventEmitter.listeners("playerObjectMove");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, object_);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerEditObject");
      let result = true;
      for (const listener of listeners) {
        result = await listener(
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerEditPlayerObject"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerEditAttachedObject"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerSelectObject");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, object_, model, x, y, z);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerSelectPlayerObject"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, object_, model, x, y, z);
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
    const listeners =
      __internal_omp.eventEmitter.listeners("playerPickUpPickup");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, pickup_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerCancelTextDrawSelection"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerCancelPlayerTextDrawSelection"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerClickTextDraw"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, textdraw_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerClickPlayerTextDraw"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, textdraw_);
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
    }
  );

  // Internal playerConnect event handler
  eventEmitter_raw.on("playerConnect", async (badRet, player) => {
    let player_ = omp.players.get(player);
    if (player_ === undefined) {
      const result = __internal_omp.Player.GetID(player);
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

    const listeners = __internal_omp.eventEmitter.listeners("playerConnect");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal playerSpawn event handler
  eventEmitter_raw.on("playerSpawn", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerSpawn. Value: " + player
      );
    const listeners = __internal_omp.eventEmitter.listeners("playerSpawn");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
  });

  // Internal playerCommandText event handler
  eventEmitter_raw.on("playerCommandText", async (badRet, player, command) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerCommandText. Value: " +
          player
      );
    const listeners =
      __internal_omp.eventEmitter.listeners("playerCommandText");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, command);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerKeyStateChange"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, newKeys, oldKeys);
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
    }
  );

  // Internal incomingConnection event handler
  eventEmitter_raw.on(
    "incomingConnection",
    async (badRet, player, ipAddress, port) => {
      const result = __internal_omp.Player.GetID(player);
      const playerEntity = new Player(result.ret);
      if (playerEntity === undefined)
        throw new Error(
          "Unable to cast player to Player for incomingConnection. Value: " +
            player
        );

      omp.players.add_INTERNAL_UNSAFE(playerEntity);
      const player_ = playerEntity;

      const listeners =
        __internal_omp.eventEmitter.listeners("incomingConnection");
      let eventResult = true;
      for (const listener of listeners) {
        eventResult = await listener(player_, ipAddress, port);
        if (typeof eventResult === "boolean" || typeof eventResult === "number") {
          switch (badRet) {
            case 1:
              if (!eventResult) {
                return false;
              }
              break;
            case 2:
              if (eventResult) {
                return true;
              }
              break;
            case 0:
            default:
              break;
          }
        }
      }
    }
  );

  // Internal playerDisconnect event handler
  eventEmitter_raw.on("playerDisconnect", async (badRet, player, reason) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerDisconnect. Value: " + player
      );
    const listeners = __internal_omp.eventEmitter.listeners("playerDisconnect");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, reason);
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
    const listeners =
      __internal_omp.eventEmitter.listeners("playerRequestSpawn");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
    const listeners = __internal_omp.eventEmitter.listeners("playerStreamIn");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, forPlayer_);
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
    const listeners = __internal_omp.eventEmitter.listeners("playerStreamOut");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, forPlayer_);
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
  });

  // Internal playerText event handler
  eventEmitter_raw.on("playerText", async (badRet, player, text) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerText. Value: " + player
      );
    const listeners = __internal_omp.eventEmitter.listeners("playerText");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, text);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerShotMissed");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, weapon, x, y, z);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerShotPlayer");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, target_, weapon, x, y, z);
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
      const target_ = omp.players.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to Player for playerShotVehicle. Value: " +
            target
        );
      const listeners =
        __internal_omp.eventEmitter.listeners("playerShotVehicle");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, target_, weapon, x, y, z);
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
      const target_ = omp.players.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to Player for playerShotObject. Value: " +
            target
        );
      const listeners =
        __internal_omp.eventEmitter.listeners("playerShotObject");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, target_, weapon, x, y, z);
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
      const target_ = omp.players.get(target);
      if (target_ === undefined)
        throw new Error(
          "Unable to cast target to Player for playerShotPlayerObject. Value: " +
            target
        );
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerShotPlayerObject"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, target_, weapon, x, y, z);
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

    const listeners = __internal_omp.eventEmitter.listeners("playerDeath");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, killer_, reason);
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

      const listeners =
        __internal_omp.eventEmitter.listeners("playerTakeDamage");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, from_, amount, weapon, bodypart);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerGiveDamage");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, to_, amount, weapon, bodypart);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "playerInteriorChange"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, newInterior, oldInterior);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerStateChange");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, newState, oldState);
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
    }
  );

  // Internal playerClickMap event handler
  eventEmitter_raw.on("playerClickMap", async (badRet, player, x, y, z) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerClickMap. Value: " + player
      );
    const listeners = __internal_omp.eventEmitter.listeners("playerClickMap");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, x, y, z);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerClickPlayer");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, clicked_, source);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "clientCheckResponse"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, actionType, address, result_);
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
    }
  );

  // Internal playerUpdate event handler
  eventEmitter_raw.on("playerUpdate", async (badRet, player) => {
    const player_ = omp.players.get(player);
    if (player_ === undefined)
      throw new Error(
        "Unable to cast player to Player for playerUpdate. Value: " + player
      );
    const listeners = __internal_omp.eventEmitter.listeners("playerUpdate");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_);
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
    const listeners = __internal_omp.eventEmitter.listeners("vehicleStreamIn");
    let result = true;
    for (const listener of listeners) {
      result = await listener(vehicle_, player_);
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
    const listeners = __internal_omp.eventEmitter.listeners("vehicleStreamOut");
    let result = true;
    for (const listener of listeners) {
      result = await listener(vehicle_, player_);
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
    const listeners = __internal_omp.eventEmitter.listeners("vehicleDeath");
    let result = true;
    for (const listener of listeners) {
      result = await listener(vehicle_, player_);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("playerEnterVehicle");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, vehicle_, passenger);
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
    const listeners =
      __internal_omp.eventEmitter.listeners("playerExitVehicle");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, vehicle_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "vehicleDamageStatusUpdate"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(vehicle_, player_);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("vehiclePaintJob");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, vehicle_, paintJob);
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
      const listeners = __internal_omp.eventEmitter.listeners("vehicleMod");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, vehicle_, component);
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
      const listeners = __internal_omp.eventEmitter.listeners("vehicleRespray");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, vehicle_, color1, color2);
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
      const listeners =
        __internal_omp.eventEmitter.listeners("enterExitModShop");
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, enterexit, interiorId);
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
    }
  );

  // Internal vehicleSpawn event handler
  eventEmitter_raw.on("vehicleSpawn", async (badRet, vehicle) => {
    const vehicle_ = omp.vehicles.get(vehicle);
    if (vehicle_ === undefined)
      throw new Error(
        "Unable to cast vehicle to Vehicle for vehicleSpawn. Value: " + vehicle
      );
    const listeners = __internal_omp.eventEmitter.listeners("vehicleSpawn");
    let result = true;
    for (const listener of listeners) {
      result = await listener(vehicle_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "unoccupiedVehicleUpdate"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(
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
    const listeners = __internal_omp.eventEmitter.listeners("trailerUpdate");
    let result = true;
    for (const listener of listeners) {
      result = await listener(player_, trailer_);
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
      const listeners = __internal_omp.eventEmitter.listeners(
        "vehicleSirenStateChange"
      );
      let result = true;
      for (const listener of listeners) {
        result = await listener(player_, vehicle_, sirenState);
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
    }
  );
};
