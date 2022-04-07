const Stock = require("../models/stockModel");
const factory = require("../utils/databaseHandlerFactory");

// TODO ide lehet kellene egy midleware ami rárakja a sájátot.. így minden kéréshez bekerül a userId, és csak a sajátjait tudja kezelni
// erre kéne valami filtert írni
exports.getStocks = factory.getAll(Stock);
exports.getStock = factory.getOne(Stock);
exports.createStock = factory.createOne(Stock);
exports.updateStock = factory.updateOne(Stock);
exports.deleteStock = factory.deleteOne(Stock);
