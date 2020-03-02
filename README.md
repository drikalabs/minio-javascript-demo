# Javascript Minio demo

## Requirement

- Minio (https://docs.min.io/docs/minio-quickstart-guide.html)
- Node (https://nodejs.org/en/)

## Get Started

- First run your Minio, i recommend you to use docker images
    ```
  $ docker run -p 9000:9000 --name minio1 \
      -e "MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE" \
      -e "MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
      -v /mnt/data:/data \
      minio/minio server /data

    ```
    "MINIO_ACCESS_KEY" can be fill with string. "MINIO_SECRET_KEY" can be fill numeric, alphabetic ,or unique character
- Go to project and Run:
    ```
   $ npm install
    ``` 
- Configure your Minio Configuration
    ```javascript
    var minioClient = new Minio.Client({
        endPoint: 'localhost',
        useSSL: false,
        accessKey: 'AKIAIOSFODNN7EXAMPLE', // this is your token from "MINIO_ACCESS_KEY"
        secretKey: 'wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY' // this is your secret key from "MINIO_SECRET_KEY"
    });
    ``` 
  
- Run Javascript file
    ```
    $ node index.js
    ```
  
## Additional


Remove some comments on some functions to carry out other functions
  