import {Request,Response} from './moduleCommon'

interface TitleDto {
    title: string;
}


export const post = (req : Request<any> , res : Response<any>) => {
  const {title} = req.body as TitleDto;
  const reminder = {id: Date.now(), title, isComplete :false };
    res.status(201).json(reminder);
}