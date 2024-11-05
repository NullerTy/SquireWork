import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

const record = await pb.collection('db1').getOne('RECORD_ID', {
  expand: 'relField1,relField2.subRelField',
})
