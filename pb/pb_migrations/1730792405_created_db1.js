/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: 'fqslkb6aig62vcy',
      created: '2024-11-05 07:40:05.604Z',
      updated: '2024-11-05 07:40:05.604Z',
      name: 'db1',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'i9ccocjy',
          name: 'field',
          type: 'text',
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: '1edpy4ig',
          name: 'field2',
          type: 'text',
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: '2fpkanxu',
          name: 'field3',
          type: 'text',
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: 'e9jvta6t',
          name: 'field4',
          type: 'text',
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
      ],
      indexes: [],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    })

    return Dao(db).saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('fqslkb6aig62vcy')

    return dao.deleteCollection(collection)
  }
)
