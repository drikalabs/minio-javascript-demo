var Minio = require('minio');
var minioClient = new Minio.Client({
    endPoint: '9f42cc02.ngrok.io',
    useSSL: true,
    accessKey: 'AKIAIOSFODNN7EXAMPLE',
    secretKey: 'wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY'
});

var metaData = {
    'Content-Type': 'application/octed-stream',
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}

var file = 'resource/hello-world.txt';

function createBucket(bucketName, region) {
    minioClient.makeBucket(bucketName, region, (err) => {
        if (err) return console.log(err);
        console.log(`Bucket ${bucketName} create successfully in ${region} .`)
    });
}

function uploadFileToBucket(bucketName, objectName, file, metaData,) {
    minioClient.fPutObject(bucketName, objectName, file, metaData, (err, etag) => {
        if (err) return console.log(err);
        console.log(`File uploaded successfully in bucket ${bucketName}`)
    });
}

function deleteFileInBucket(bucketName, objectName) {
    minioClient.removeObject(bucketName, objectName, (err) => {
        if (err) return console.log(err)
    })
    console.log(`Delete file ${objectName} successfully`)
}

function deleteBucket(bucketName) {
    minioClient.removeBucket(bucketName, (err) => {
        if (err) return console.log(err)
        console.log(`success deleting bucket ${bucketName}`)
    })

}

// function getFileFromBucket() {
//     var file = minioClient.fGetObject('filetrip','hello-world.txt','filetrip');
//     console.log(file);
// }


let bucketName1 = 'filetrip';
let objectName1 = 'hello-world.txt';
let region='SEA';
createBucket(bucketName1,region); // this is function create bucket to minio
// uploadFileToBucket(bucketName1,objectName1,file,metaData); // upload file to minio bucket
//deleteFileInBucket(bucketName1,objectName1); //delete file in bucket
//deleteBucket(bucketName1); //delete bucket
