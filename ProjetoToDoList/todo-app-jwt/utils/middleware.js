import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function middleware(request) {
    const token = request.headers.get("Authorization").split 

    if (!token) {
        return res.status(401).json({message: 'Token ausente ou Inválido'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return handler(req, res);
    } catch (error) {
        return res.status(401).json({message: 'Token ausente ou Inválido'});

    }
};