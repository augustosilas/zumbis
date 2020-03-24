const mongoose = require("mongoose");
const Arma = require("./Arma");
const Armadura = require("./Armadura");
const mongoosePaginate = require("mongoose-paginate");

const ZumbiSchema = new mongoose.Schema({
  arma: {
    type: [],
    required: true
  },
  armadura: {
    type: [],
    required: true
  }
});

ZumbiSchema.plugin(mongoosePaginate);

mongoose.model("Zumbi", ZumbiSchema);
