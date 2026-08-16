import { prisma } from "../../config/prisma";

export class EmpresaRepository {
    async findAll() {
        return prisma.empresa.findMany();
    }
}