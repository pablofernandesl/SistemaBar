import express from "express";
import empresaRoutes from "./modules/empresa/empresa.routes";

const app = express ();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        sucess: true,
        message: "BarControl API online",
        version: "1.0.0"
    });
});

app.use("/api/empresas", empresaRoutes);

export default app;