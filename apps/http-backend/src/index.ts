import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {CreateRoomSchema, CreateUserSchema, SignInSchema} from "@repo/common/types"
const app = express();
import {prismaClient} from "@repo/db/client"


app.post("/signup", (req, res) => {
    
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect inputs"
        })
        return ;
    }

    res.json({
        userId : "123"
    })
})

app.post("/signin", (req, res)=>{

    const data = SignInSchema.safeParse(req.body);

    if(!data.success){
        res.json({
            message:"Incorrect inputs"
        })
        return ;
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware, (req, res)=>{

    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect inputs"
        })
        return ;
    }

    // db call

    res.json({
        roomId: 123
    })
})

app.listen(3001);