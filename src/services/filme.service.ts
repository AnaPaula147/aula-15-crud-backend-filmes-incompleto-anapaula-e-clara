import { prisma } from "../prisma/client.js";

export class FilmeService {

    async create(dados: { titulo: string; nota: number; imagem: string }) {
        return prisma.filme.create({ data: dados });
    }

    async delete(id: number) {
        return prisma.filme.delete({ where: { id } });
    }

    async findAll() {
        return prisma.filme.findMany();
    }

    async findById(id: number) {
        return prisma.filme.findUnique({ where: { id } });
    }

    async update(id: number, dados: { titulo: string; nota: number; imagem: string }) {
        return prisma.filme.update({ where: { id }, data: dados });
    }
}
