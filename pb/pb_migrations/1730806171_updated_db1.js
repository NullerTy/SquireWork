/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('fqslkb6aig62vcy')

    collection.indexes = ['CREATE INDEX `idx_boMXTIU` ON `db1` (`field`)']

    return dao.saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('fqslkb6aig62vcy')

    collection.indexes = []

    return dao.saveCollection(collection)
  }
)
