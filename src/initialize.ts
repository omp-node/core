import { internal_omp, omp } from "./globals";
import { Pool, PerPlayerEntityPool, PlayerPool } from "./pools";
import * as constants from "./constants.js";
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
import { initializeEvents } from "./events";

async function onResourceStart(_: number, error: boolean) {
  if (!error) {
    omp.players = new Pool<Player>();
    for (let i = 0; i < constants.PLAYER_POOL_SIZE; i++) {
      try {
        omp.players.add_INTERNAL_UNSAFE(new Player(i));
      } catch (e) {}
    }

    omp.vehicles = new Pool<Vehicle>();
    for (let i = 0; i < constants.VEHICLE_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.vehicles.add_INTERNAL_UNSAFE(new Vehicle(i));
      } catch (e) {}
    }

    omp.objects = new Pool<ObjectMp>();
    for (let i = 0; i < constants.OBJECT_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.objects.add_INTERNAL_UNSAFE(new ObjectMp(i));
      } catch (e) {}
    }

    omp.textdraws = new Pool<TextDraw>();
    for (let i = 0; i < constants.GLOBAL_TEXTDRAW_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.textdraws.add_INTERNAL_UNSAFE(new TextDraw(i));
      } catch (e) {}
    }

    omp.pickups = new Pool<Pickup>();
    for (let i = 0; i < constants.PICKUP_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.pickups.add_INTERNAL_UNSAFE(new Pickup(i));
      } catch (e) {}
    }

    omp.gangzones = new Pool<GangZone>();
    for (let i = 0; i < constants.GANG_ZONE_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.gangzones.add_INTERNAL_UNSAFE(new GangZone(i));
      } catch (e) {}
    }

    omp.textlabels = new Pool<TextLabel>();
    for (let i = 0; i < constants.TEXT_LABEL_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.textlabels.add_INTERNAL_UNSAFE(new TextLabel(i));
      } catch (e) {}
    }

    omp.actors = new Pool<Actor>();
    for (let i = 0; i < constants.ACTOR_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.actors.add_INTERNAL_UNSAFE(new Actor(i));
      } catch (e) {}
    }

    omp.menus = new Pool<Menu>();
    for (let i = 0; i < constants.MENU_POOL_SIZE; i++) {
      try {
        // @ts-ignore
        omp.menus.add_INTERNAL_UNSAFE(new Menu(i));
      } catch (e) {}
    }

    omp.playerObjects = new PerPlayerEntityPool<PlayerPool<PlayerObject>>();
    omp.players.forEach((player, _) => {
      const playerId = player.getID();
      if (playerId != null) {
        const entries = omp.playerObjects.entries_INTERNAL_UNSAFE();
        const pool = new PlayerPool<PlayerObject>(player);

        for (let i = 0; i < constants.OBJECT_POOL_SIZE; i++) {
          try {
            // @ts-ignore
            pool.add_INTERNAL_UNSAFE(new PlayerObject(player, i));
          } catch (e) {}
        }

        entries.set(playerId, pool);
      }
    });

    omp.playerTextDraws = new PerPlayerEntityPool();
    omp.players.forEach((player, _) => {
      const playerId = player.getID();
      if (playerId != null) {
        const entries = omp.playerTextDraws.entries_INTERNAL_UNSAFE();
        const pool = new PlayerPool<PlayerTextDraw>(player);

        for (let i = 0; i < constants.TEXT_LABEL_POOL_SIZE; i++) {
          try {
            // @ts-ignore
            pool.add_INTERNAL_UNSAFE(new PlayerTextDraw(player, i));
          } catch (e) {}
        }

        entries.set(playerId, pool);
      }
    });

    omp.playerTextLabels = new PerPlayerEntityPool();
    omp.players.forEach((player, _) => {
      const playerId = player.getID();
      if (playerId != null) {
        const entries = omp.playerTextLabels.entries_INTERNAL_UNSAFE();
        const pool = new PlayerPool<PlayerTextLabel>(player);

        for (let i = 0; i < constants.TEXT_LABEL_POOL_SIZE; i++) {
          try {
            // @ts-ignore
            pool.add_INTERNAL_UNSAFE(new PlayerTextLabel(player, i));
          } catch (e) {}
        }

        entries.set(playerId, pool);
      }
    });
  }

  const eventEmitter = internal_omp.eventEmitter;
  const listeners = eventEmitter.listeners("resourceStart");
  for (const listener of listeners) {
    await listener(error);
  }
}

async function initializeOmpNodeLibrary(error: boolean) {
  initializeEvents();
  await onResourceStart(0, error);
}

// @ts-ignore
__internal_setOmpNodeLibraryFunction(initializeOmpNodeLibrary);
