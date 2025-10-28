import Player from "./components/Player.js";

export class Pool<T> {
  /**
   * @type {Map<number, T>}
   */
  private entries = new Map<number, T>();

  /**
   * @description A map of entity pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  private entityPtrs = new Map<number, number>();

  /**
   * @method at
   * @description Get entity instance based on their ID
   * @param {number} id
   * @returns {T|undefined}
   */
  at(id: number): T | undefined {
    const ptr = this.entityPtrs.get(id);
    if (ptr) {
      return this.entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get entity instance based on their pointer
   * @param {number} ptr - entity pointer
   * @returns {T|undefined}
   */
  get(ptr: any): T | undefined {
    return this.entries.get(ptr);
  }

  /**
   * @method at
   * @returns {T[]} a copy of array of entities
   */
  all() {
    return [...Array.from(this.entries.values())];
  }

  /**
   * @method forEach
   * @param {function(T, number): void} callback - The function to execute for each entity.
   */
  forEach(callback: (entity: T, index: number) => void) {
    this.entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entity: T) {
    if (entity) {
      // @ts-ignore
      this.entityPtrs.set(entity.getID(), entity.getPtr());
      // @ts-ignore
      this.entries.set(entity.getPtr(), entity);
    }
  }

  remove_INTERNAL_UNSAFE(entity: T) {
    if (entity) {
      // @ts-ignore
      this.entityPtrs.delete(entity.getID());
      // @ts-ignore
      this.entries.delete(entity.getPtr());
    }
  }

  entries_INTERNAL_UNSAFE() {
    return this.entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.entityPtrs;
  }
}

export class PlayerPool<T> {
  /**
   * @type {Player}
   */
  player: Player | null = null;

  /**
   * @type {Map<number, T>}
   */
  entries = new Map<number, T>();

  /**
   * @description A map of player entity pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  entityPtrs = new Map<number, number>();

  /**
   * @constructor
   * @param {Player} player
   */
  constructor(player: Player) {
    this.player = player;
  }

  /**
   * @method at
   * @description Get player entity instance based on their ID
   * @param {number} id
   * @returns {T|undefined}
   */
  at(id: number) {
    const ptr = this.entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get player entity instance based on their pointer
   * @param {number} ptr - player entity pointer
   * @returns {T|undefined}
   */
  get(ptr: any) {
    return this.entries.get(ptr);
  }

  /**
   * @method all
   * @returns {T[]} a copy of array of player entity
   */
  all() {
    return [...Array.from(this.entries.values())];
  }

  /**
   * @method forEach
   * @param {function(T, number): void} callback - The function to execute for each player entity.
   */
  forEach(callback: (entity: T, index: number) => void) {
    this.entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entity: T) {
    if (entity) {
      // @ts-ignore
      this.entityPtrs.set(entity.getID(), entity.getPtr());
      // @ts-ignore
      this.entries.set(entity.getPtr(), entity);
    }
  }

  remove_INTERNAL_UNSAFE(entity: T) {
    if (entity) {
      // @ts-ignore
      this.entityPtrs.delete(entity.getID());
      // @ts-ignore
      this.entries.delete(entity.getPtr());
    }
  }

  entries_INTERNAL_UNSAFE() {
    return this.entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.entityPtrs;
  }
}

export class PerPlayerEntityPool<T> {
  entries = new Map<number, T>();

  /**
   * @method at
   * @description Get player's entity pool
   * @param {number} playerid
   * @returns {T|undefined}
   */
  at(playerid: number) {
    return this.entries.get(playerid);
  }

  entries_INTERNAL_UNSAFE() {
    return this.entries;
  }
}
