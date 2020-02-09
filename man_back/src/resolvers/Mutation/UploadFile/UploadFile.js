const AWS = require('aws-sdk')
const fs = require('fs')
AWS.config.loadFromPath(__dirname+'/config.json');

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const uploadfile = async (parent, args, context, info) => {
  const {input} = args
  const {encoding, authorId} = input
  const file =  await context.prisma.createFile({
    encoding: encoding,
    author:{
      connect:{
        id: authorId
      }
    }
  })
  return {file}
}
const singleUploadStream =  async (parent, args,context, info) => {
  console.log(args)
  const {userId} = args
  const file = await args.file
  const {createReadStream, filename, mimetype} = file
  const fileStream = createReadStream()
  console.log(fileStream)
  const uploadParams = {Bucket: 'manphoto', ContentType: mimetype, Key: filename, Body: fileStream};
  const result = await s3.upload(uploadParams).promise()

  console.log(result)
  const user = await context.prisma.updateUser({
    data:{
      profileFile:result.Location
    },
    where:{
      id:userId
    }
  })
  console.log(file)

  return {
    user,
    filename:file.filename,
    mimetype:file.mimetype,
    encoding:file.encoding,
  }
}

export {uploadfile, singleUploadStream}