const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ArmaduraSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    absorcao: {
        type: Number,
        required: true
    }
});

ArmaduraSchema.plugin(mongoosePaginate);
mongoose.model('Armadura', ArmaduraSchema);