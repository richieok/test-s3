import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

async function run(){
    const s3Client = new S3Client({
        region: 'us-east-1'
    })
    const command = new GetObjectCommand({
        Bucket: 'qubit-app1-bucket',
        Key: 'my_script.txt'
    })
    const response = await s3Client.send(command)
    // console.log(response)
    const content = response.Body.transformToString()
    console.log(content);
}

run()
