const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')

function ingredientImg(name) {
  switch (name) {
    case 'alface':
      return '../assets/images/alface.png'
    case 'ameixa':
      return '../assets/images/ameixa.png'
    case 'amêndoas':
      return '../assets/images/amêndoas.png'
    case 'aniz':
      return '../assets/images/aniz.png'
    case 'café':
      return '../assets/images/café.png'
    case 'camarão':
      return '../assets/images/camarão.png'
    case 'canela':
      return '../assets/images/canela.png'
    case 'claras':
      return '../assets/images/claras.png'
    case 'damasco':
      return '../assets/images/damasco.png'
    case 'farinha':
      return '../assets/images/farinha.png'
    case 'limão':
      return '../assets/images/limão.png'
    case 'maçã':
      return '../assets/images/maçã.png'
    case 'massa':
      return '../assets/images/massa.png'
    case 'pão naan':
      return '../assets/images/pão naan.png'
    case 'pão':
      return '../assets/images/pão.png'
    case 'pepino':
      return '../assets/images/pepino.png'
    case 'pêssego':
      return '../assets/images/pêssego.png'
    case 'pesto':
      return '../assets/images/pesto.png'
    case 'maracujá':
      return '../assets/images/maracujá.png'
    case 'presunto':
      return '../assets/images/presunto.png'
    case 'rabanete':
      return '../assets/images/rabanete.png'
    case 'rúcula':
      return '../assets/images/rúcula.png'
    case 'tomate':
      return '../assets/images/tomate.png'
    case 'whiskey':
      return '../assets/images/whiskey.png'
    default:
      return ''
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

    console.log(title)
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

    const plate = await knex('plates').where({ id })
    const ingredients = await knex('ingredients').where({ plate_id: id })

    return response.json({
      ...plate,
      ingredients
    })
  }
}

module.exports = PlatesController

// {	"title": "Nome do prato ",	"price": "50,00",	"description": "lorem lorem lorem",	"type": "meal",	"ingredients": [		"alface",		"igd2"	]}
