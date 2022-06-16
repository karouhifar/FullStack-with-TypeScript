import {Request,Response} from './moduleCommon'


export const get = (req : Request<any> , res : Response<any>) => {
    res.send("List of  reminders")
}