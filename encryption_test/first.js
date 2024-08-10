
const fetchTask = async(url)=>{
   const res = await fetch(url)
   const data = await res.json()
   console.log(data);
}

fetchTask("https://ciphersprint.pulley.com/edimavthompson@gmail.com")

//{
//  "challenger": "edimavthompson@gmail.com",
//  "encrypted_path": "task_M2ZkYzdkNTgyNDMxYzE4YjE0MzI2M2Y4NTBhZWRmMjU=",
//  "encryption_method": "encoded as base64",
//  "expires_in": "15s",
//  "hint": "you should write a program to fetch these endpoints and handle each encryption method you find.",
//  "instructions": "encrypted_path is the path to your next challenge. encryption_method is how it was encrypted.",
//  "level": 1
//}