const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')

function ingredientImg(name) {
  switch (name) {
    case 'alface':
      return 'alface.png'
    case 'ameixa':
      return 'ameixa.png'
    case 'amêndoas':
      return 'amêndoas.png'
    case 'aniz':
      return 'aniz.png'
    case 'café':
      return 'café.png'
    case 'camarão':
      return 'camarão.png'
    case 'canela':
      return 'canela.png'
    case 'claras':
      return 'claras.png'
    case 'damasco':
      return 'damasco.png'
    case 'farinha':
      return 'farinha.png'
    case 'limão':
      return 'limão.png'
    case 'maçã':
      return 'maçã.png'
    case 'massa':
      return 'massa.png'
    case 'pão naan':
      return 'pão naan.png'
    case 'pão':
      return 'pão.png'
    case 'pepino':
      return 'pepino.png'
    case 'pêssego':
      return 'pêssego.png'
    case 'pesto':
      return 'pesto.png'
    case 'maracujá':
      return 'maracujá.png'
    case 'presunto':
      return 'presunto.png'
    case 'rabanete':
      return 'rabanete.png'
    case 'rúcula':
      return 'rúcula.png'
    case 'tomate':
      return 'tomate.png'
    case 'whiskey':
      return 'whiskey.png'
    default:
      return 'default'
  }
}

class PlatesController {
  async index(request, response) {
    const plates = await knex('plates').select()

    return response.json(plates)
  }

  async create(request, response) {
    const data = request.body.data
    const { title, price, description, ingredients, type } = JSON.parse(data)
    const img = request.file.filename

    const diskStorage = new DiskStorage()

    if (!title || !price || !description || !img || !type) {
      throw new AppError('Não foi possivel realizar o cadastro.')
    }

    const filename = await diskStorage.saveFile(img)

    const plate_id = await knex('plates').insert({
      title,
      price,
      description,
      img: filename,
      type
    })

    if (ingredients) {
      const ingredientsInsert = ingredients.map(ingredient => {
        return {
          title: ingredient,
          img: ingredientImg(ingredient),
          plate_id
        }
      })

      await knex('ingredients').insert(ingredientsInsert)
    }

    return response.send('Plate Saved')
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('plates').where({ id }).delete()

    return response.send('Plate deleted')
  }
  async show(request, response) {
    const { id } = request.params

    const plate = await knex('plates').where({ id }).first()
    const ingredients = await knex('ingredients').where({ plate_id: id })

    return response.json({ ...plate, ingredients })
  }
}

module.exports = PlatesController
