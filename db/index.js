const Model = require('../model')
for (model in Model) {
  Model[model].sync({ alter: true })
}