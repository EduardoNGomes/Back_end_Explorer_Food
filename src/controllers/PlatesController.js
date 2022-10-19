class PlatesController {
  create(request, response) {
    const { title, price, description, img, ingredients } = request.body

    response.json({ title, price, description, img, ingredients })
  }
}

module.exports = PlatesController
