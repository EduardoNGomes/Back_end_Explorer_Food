const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOAD_FOLDER, file)
    )

    return file
  }
}

module.exports = DiskStorage
