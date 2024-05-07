const dbConfig = require("../../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.batch = require("./batch.js")(sequelize, Sequelize);
db.client = require("./client.js")(sequelize, Sequelize);
db.curriculum = require("./curriculum.js")(sequelize, Sequelize);
db.curriculum_materi = require("./curriculum_materi.js")(sequelize, Sequelize);
db.curriculum_reviews = require("./curriculum_reviews.js")(sequelize, Sequelize);
db.instructor = require("./instructor.js")(sequelize, Sequelize);
db.jobs = require("./jobs.js")(sequelize, Sequelize);
db.jobs_talent_apply = require("./jobs_talent_apply.js")(sequelize, Sequelize);
db.placement = require("./placement.js")(sequelize, Sequelize);
db.roles = require("./roles.js")(sequelize, Sequelize);
db.talent = require("./talent.js")(sequelize, Sequelize);
db.talent_batch = require("./talent_batch.js")(sequelize, Sequelize);
db.talent_experience = require("./talent_experience.js")(sequelize, Sequelize);
db.talent_placement = require("./talent_placement.js")(sequelize, Sequelize);
db.talent_timeline = require(".talent_timeline.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);
db.users_client = require("./users_client.js")(sequelize, Sequelize);
db.user_roles = require("./user_roles.js")(sequelize, Sequelize);

db.talent_batch.belongsTo(db.batch, { as: "taba_batch", foreignKey: "taba_batch_id" });
db.batch.hasMany(db.talent_batch, { as: "talent_batches", foreignKey: "taba_batch_id" });

db.jobs.belongsTo(db.client, { as: "jobs_client", foreignKey: "jobs_client_id" });
db.client.hasMany(db.jobs, { as: "db.jobs", foreignKey: "jobs_client_id" });

db.placement.belongsTo(db.client, { as: "place_client", foreignKey: "place_client_id" });
db.client.hasMany(db.placement, { as: "placements", foreignKey: "place_client_id" });

db.users_client.belongsTo(db.client, { as: "uscl_client", foreignKey: "uscl_client_id" });
db.client.hasMany(db.users_client, { as: "users_clients", foreignKey: "uscl_client_id" });

db.db.curriculum_materi.belongsTo(db.curriculum, { as: "cuma_curr", foreignKey: "cuma_curr_id" });
db.curriculum.hasMany(db.db.curriculum_materi, { as: "curriculum_materis", foreignKey: "cuma_curr_id" });

db.db.curriculum_reviews.belongsTo(db.curriculum, { as: "cure_curr", foreignKey: "cure_curr_id" });
db.curriculum.hasMany(db.db.curriculum_reviews, { as: "db.db.curriculum_reviews", foreignKey: "cure_curr_id" });

db.db.curriculum_materi.belongsTo(db.db.curriculum_materi, { as: "cuma_cuma", foreignKey: "cuma_cuma_id" });
db.db.curriculum_materi.hasMany(db.db.curriculum_materi, { as: "curriculum_materis", foreignKey: "cuma_cuma_id" });

db.batch.belongsTo(db.instructor, { as: "batch_inst", foreignKey: "batch_inst_id" });
db.instructor.hasMany(db.batch, { as: "batches", foreignKey: "batch_inst_id" });

db.curriculum.belongsTo(db.instructor, { as: "curr_inst", foreignKey: "curr_inst_id" });
db.instructor.hasMany(db.curriculum, { as: "curriculums", foreignKey: "curr_inst_id" });

db.talent_placement.belongsTo(db.placement, { as: "tapl_place", foreignKey: "tapl_place_id" });
db.placement.hasMany(db.talent_placement, { as: "talent_placements", foreignKey: "tapl_place_id" });

db.user_roles.belongsTo(db.roles, { foreignKey: "usro_role_id" });
db.roles.hasMany(db.user_roles, { foreignKey: "usro_role_id" });

db.talent_batch.belongsTo(db.talent, { as: "taba_tale", foreignKey: "taba_tale_id" });
db.talent.hasMany(db.talent_batch, { as: "talent_batches", foreignKey: "taba_tale_id" });

db.talent_experience.belongsTo(db.talent, { as: "taex_tale", foreignKey: "taex_tale_id" });
db.talent.hasMany(db.talent_experience, { as: "talent_experiences", foreignKey: "taex_tale_id" });

db.talent_placement.belongsTo(db.talent, { as: "tapl_tale", foreignKey: "tapl_tale_id" });
db.talent.hasMany(db.talent_placement, { as: "talent_placements", foreignKey: "tapl_tale_id" });

db.talent_timeline.belongsTo(db.talent, { as: "tati_tale", foreignKey: "tati_tale_id" });
db.talent.hasMany(db.talent_timeline, { as: "talent_timelines", foreignKey: "tati_tale_id" });

talent_experience_media.belongsTo(db.talent_experience, { as: "teme_taex", foreignKey: "teme_taex_id" });
db.talent_experience.hasMany(talent_experience_media, { as: "talent_experience_media", foreignKey: "teme_taex_id" });

db.talent_timeline.belongsTo(time_line, { as: "tati_timeline_name_time_line", foreignKey: "tati_timeline_name" });
time_line.hasMany(db.talent_timeline, { as: "talent_timelines", foreignKey: "tati_timeline_name" });

db.batch.belongsTo(db.users, { as: "batch_user", foreignKey: "batch_user_id" });
db.users.hasMany(db.batch, { as: "batches", foreignKey: "batch_user_id" });

db.curriculum.belongsTo(db.users, { as: "curr_user", foreignKey: "curr_user_id" });
db.users.hasMany(db.curriculum, { as: "curriculums", foreignKey: "curr_user_id" });

db.db.curriculum_reviews.belongsTo(db.users, { as: "curr_user", foreignKey: "curr_user_id" });
db.users.hasMany(db.db.curriculum_reviews, { as: "db.db.curriculum_reviews", foreignKey: "curr_user_id" });

db.jobs.belongsTo(db.users, { as: "jobs_user", foreignKey: "jobs_user_id" });
db.users.hasMany(db.jobs, { as: "db.jobs", foreignKey: "jobs_user_id" });

db.jobs_talent_apply.belongsTo(db.users, { as: "jtap_user", foreignKey: "jtap_user_id" });
db.users.hasMany(db.jobs_talent_apply, { as: "jobs_talent_applies", foreignKey: "jtap_user_id" });

db.placement.belongsTo(db.users, { as: "place_user", foreignKey: "place_user_id" });
db.users.hasMany(db.placement, { as: "placements", foreignKey: "place_user_id" });

db.talent.belongsTo(db.users, { as: "tale_user", foreignKey: "tale_user_id" });
db.users.hasMany(db.talent, { as: "talents", foreignKey: "tale_user_id" });

db.user_roles.belongsTo(db.users, { foreignKey: "usro_user_id" });
db.users.hasMany(db.user_roles, { foreignKey: "usro_user_id" });

db.users_client.belongsTo(db.users, { as: "uscl_user", foreignKey: "uscl_user_id" });
db.users.hasMany(db.users_client, { as: "users_clients", foreignKey: "uscl_user_id" });

module.exports = db;
