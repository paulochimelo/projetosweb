import { Request, response, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserControler{
    async create(req:Request, res:Response){
        
        const{name, email} = req.body

        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email,
        })

if (userAlreadyExists){
    return response.status(400).json({
        error: "User already exists!",
    });
}

    const user = usersRepository.create({
        name, email
    })

    await usersRepository.save(user);
    return response.json(user);
    }
}

export { UserControler };
