import { Request, Response } from "express";
import { EmpresaService } from "./empresa.service";

export class EmpresaController {
    private service: EmpresaService;

    constructor() {
        this.service = new EmpresaService();
    }


    listar = async (req: Request, res: Response) => {
        try {
            const empresas = await this.service.listarEmpresas();

            return res.status(200).json({
                sucess: true,
                data: empresas
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                sucess: false,
                message: "Erro ao buscar empresas."
            });
        }
    };
}
