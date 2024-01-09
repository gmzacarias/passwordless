import type{NextApiRequest,NextApiResponse} from "next"
export default function (req:NextApiRequest,res:NextApiResponse){
res.send("hola soy la api"+ process.env.FIREBASE_CONNECTION)
}