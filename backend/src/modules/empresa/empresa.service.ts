import { EmpresaRepository } from "./empresa.repository";

export class EmpresaService {
    private repository: EmpresaRepository;

    constructor() {
        this.repository = new EmpresaRepository();
    }

    async listarEmpresas() {
        return this.repository.findAll();
    }
}