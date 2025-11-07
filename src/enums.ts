// =====================
// Checkpoint Types
// =====================
export enum CP_TYPE {
  GROUND_NORMAL = 0,
  GROUND_FINISH = 1,
  GROUND_EMPTY = 2,
  AIR_NORMAL = 3,
  AIR_FINISH = 4,
  AIR_ROTATING = 5,
  AIR_STROBING = 6,
  AIR_SWINGING = 7,
  AIR_BOBBING = 8,
}

// =====================
// Weapon Types
// =====================
export enum WEAPON {
  FIST = 0,
  BRASSKNUCKLE = 1,
  GOLFCLUB = 2,
  NITESTICK = 3,
  NIGHTSTICK = 3,
  KNIFE = 4,
  BAT = 5,
  SHOVEL = 6,
  POOLSTICK = 7,
  KATANA = 8,
  CHAINSAW = 9,
  DILDO = 10,
  DILDO2 = 11,
  VIBRATOR = 12,
  VIBRATOR2 = 13,
  FLOWER = 14,
  CANE = 15,
  GRENADE = 16,
  TEARGAS = 17,
  MOLTOV = 18,
  MOLOTOV = 18,
  COLT45 = 22,
  SILENCED = 23,
  DEAGLE = 24,
  SHOTGUN = 25,
  SAWEDOFF = 26,
  SHOTGSPA = 27,
  UZI = 28,
  MP5 = 29,
  AK47 = 30,
  M4 = 31,
  TEC9 = 32,
  RIFLE = 33,
  SNIPER = 34,
  ROCKETLAUNCHER = 35,
  HEATSEEKER = 36,
  FLAMETHROWER = 37,
  MINIGUN = 38,
  SATCHEL = 39,
  BOMB = 40,
  SPRAYCAN = 41,
  FIREEXTINGUISHER = 42,
  CAMERA = 43,
  NIGHT_VISION_GOGGLES = 44,
  THERMAL_GOGGLES = 45,
  PARACHUTE = 46,
  VEHICLE = 49,
  DROWN = 53,
  COLLISION = 54,
  SPLAT = 54,
}

// =====================
// Weapon Slots
// =====================
export enum WEAPON_SLOT {
  UNKNOWN = -1,
  UNARMED = 0,
  MELEE = 1,
  PISTOL = 2,
  SHOTGUN = 3,
  MACHINE_GUN = 4,
  ASSAULT_RIFLE = 5,
  LONG_RIFLE = 6,
  ARTILLERY = 7,
  EXPLOSIVES = 8,
  EQUIPMENT = 9,
  GIFT = 10,
  GADGET = 11,
  DETONATOR = 12,
}

// =====================
// Player Markers Mode
// =====================
export enum PLAYER_MARKERS_MODE {
  OFF = 0,
  GLOBAL = 1,
  STREAMED = 2,
}

// =====================
// Dialog Styles
// =====================
export enum DIALOG_STYLE {
  MSGBOX = 0,
  INPUT = 1,
  LIST = 2,
  PASSWORD = 3,
  TABLIST = 4,
  TABLIST_HEADERS = 5,
}

// =====================
// Object Material Size
// =====================
export enum OBJECT_MATERIAL_SIZE {
  SIZE_32x32 = 10,
  SIZE_64x32 = 20,
  SIZE_64x64 = 30,
  SIZE_128x32 = 40,
  SIZE_128x64 = 50,
  SIZE_128x128 = 60,
  SIZE_256x32 = 70,
  SIZE_256x64 = 80,
  SIZE_256x128 = 90,
  SIZE_256x256 = 100,
  SIZE_512x64 = 110,
  SIZE_512x128 = 120,
  SIZE_512x256 = 130,
  SIZE_512x512 = 140,
}

// =====================
// Object Material Text Alignment
// =====================
export enum OBJECT_MATERIAL_TEXT_ALIGN {
  LEFT = 0,
  CENTRE = 1,
  RIGHT = 2,
}

// =====================
// Special Actions
// =====================
export enum SPECIAL_ACTION {
  NONE = 0,
  DUCK = 1,
  USEJETPACK = 2,
  ENTER_VEHICLE = 3,
  EXIT_VEHICLE = 4,
  DANCE1 = 5,
  DANCE2 = 6,
  DANCE3 = 7,
  DANCE4 = 8,
  HANDSUP = 10,
  USECELLPHONE = 11,
  SITTING = 12,
  STOPUSECELLPHONE = 13,
  DRINK_BEER = 20,
  SMOKE_CIGGY = 21,
  DRINK_WINE = 22,
  DRINK_SPRUNK = 23,
  CUFFED = 24,
  CARRY = 25,
  PISSING = 68,
}

// =====================
// Fighting Styles
// =====================
export enum FIGHT_STYLE {
  NORMAL = 4,
  BOXING = 5,
  KUNGFU = 6,
  KNEEHEAD = 7,
  GRABKICK = 15,
  ELBOW = 16,
}

// =====================
// Weapon Skills
// =====================
export enum WEAPONSKILL {
  PISTOL = 0,
  PISTOL_SILENCED = 1,
  DESERT_EAGLE = 2,
  SHOTGUN = 3,
  SAWNOFF_SHOTGUN = 4,
  SPAS12_SHOTGUN = 5,
  MICRO_UZI = 6,
  MP5 = 7,
  AK47 = 8,
  M4 = 9,
  SNIPERRIFLE = 10,
}

// =====================
// Player Keys
// =====================
export enum KEY {
  ACTION = 1,
  CROUCH = 2,
  FIRE = 4,
  SPRINT = 8,
  SECONDARY_ATTACK = 16,
  JUMP = 32,
  LOOK_RIGHT = 64,
  HANDBRAKE = 128,
  LOOK_LEFT = 256,
  SUBMISSION = 512,
  LOOK_BEHIND = 512,
  WALK = 1024,
  ANALOG_UP = 2048,
  ANALOG_DOWN = 4096,
  ANALOG_LEFT = 8192,
  ANALOG_RIGHT = 16384,
  YES = 65536,
  NO = 131072,
  CTRL_BACK = 262144,
  UP = -128,
  DOWN = 128,
  LEFT = -128,
  RIGHT = 128,
}

// =====================
// Camera Movement
// =====================
export enum CAM_MOVE {
  MOVE = 1,
  CUT = 2,
}

// =====================
// Map Icon Styles
// =====================
export enum MAPICON {
  LOCAL = 0,
  GLOBAL = 1,
  LOCAL_CHECKPOINT = 2,
  GLOBAL_CHECKPOINT = 3,
}

// =====================
// Spectate Modes
// =====================
export enum SPECTATE_MODE {
  NORMAL = 1,
  FIXED = 2,
  SIDE = 3,
}

// =====================
// Player Recording Types
// =====================
export enum PLAYER_RECORDING_TYPE {
  NONE = 0,
  DRIVER = 1,
  ONFOOT = 2,
}

// =====================
// Force Sync
// =====================
export enum FORCE_SYNC {
  NONE = 0,
  ALL = 1,
  OTHER = 2,
}

// =====================
// Text Draw Font
// =====================
export enum TEXT_DRAW_FONT {
  FONT_0 = 0,
  FONT_1 = 1,
  FONT_2 = 2,
  FONT_3 = 3,
  SPRITE_DRAW = 4,
  MODEL_PREVIEW = 5,
}

// =====================
// Text Draw Alignment
// =====================
export enum TEXT_DRAW_ALIGN {
  LEFT = 1,
  CENTRE = 2,
  RIGHT = 3,
}

// =====================
// Car Mod Types
// =====================
export enum CARMODTYPE {
  NONE = -1,
  SPOILER = 0,
  HOOD = 1,
  ROOF = 2,
  SIDESKIRT = 3,
  LAMPS = 4,
  NITRO = 5,
  EXHAUST = 6,
  WHEELS = 7,
  STEREO = 8,
  HYDRAULICS = 9,
  FRONT_BUMPER = 10,
  REAR_BUMPER = 11,
  VENT_RIGHT = 12,
  VENT_LEFT = 13,
  FRONT_BULLBAR = 14,
  REAR_BULLBAR = 15,
}

// =====================
// Vehicle Model Info
// =====================
export enum VEHICLE_MODEL_INFO {
  SIZE = 1,
  FRONT_SEAT = 2,
  REAR_SEAT = 3,
  PETROL_CAP = 4,
  WHEELS_FRONT = 5,
  WHEELS_REAR = 6,
  WHEELS_MID = 7,
  FRONT_BUMPER_Z = 8,
  REAR_BUMPER_Z = 9,
}

// =====================
// Vehicle Panel Status
// =====================
export enum VEHICLE_PANEL_STATUS {
  NONE = 0,
}

// =====================
// Vehicle Door Status
// =====================
export enum VEHICLE_DOOR_STATUS {
  NONE = 0,
  BONNET_OPEN = 1,
  BONNET_DAMAGED = 2,
  BONNET_MISSING = 4,
  BOOT_OPEN = 256,
  BOOT_DAMAGED = 512,
  BOOT_MISSING = 1024,
  FRONT_LEFT_OPEN = 65536,
  FRONT_LEFT_DAMAGED = 131072,
  FRONT_LEFT_MISSING = 262144,
  FRONT_RIGHT_OPEN = 16777216,
  FRONT_RIGHT_DAMAGED = 33554432,
  FRONT_RIGHT_MISSING = 67108864,
}

// =====================
// Vehicle Light Status
// =====================
export enum VEHICLE_LIGHT_STATUS {
  FRONT_LEFT_BROKEN = 1,
  FRONT_RIGHT_BROKEN = 4,
  REAR_BROKEN = 1024,
}

// =====================
// Vehicle Tyre Status
// =====================
export enum VEHICLE_TIRE_STATUS {
  FRONT_LEFT_POPPED = 8,
  FRONT_RIGHT_POPPED = 2,
  REAR_LEFT_POPPED = 4,
  REAR_RIGHT_POPPED = 1,
}
