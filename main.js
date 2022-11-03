const fs = require("fs")

let lista = [];
const paises = [
    "mx",
    "co",
    "ar",
    "br",
    "pe",
    "ec",
    "cl",
    "cr",
    "uy"
];

let data = ""

fs.readFile("ms.txt", 'utf8', (error, datos) => {
    if (error) throw error;

    lista = datos.split("\r\n")

    lista.forEach((ms) => {
        paises.forEach((pais) => {
            data += `${ms}-${pais}\n`
        })
        data += `\n`;
    })

    data += "Cantidad de servicios ingresados: " + lista.length + "\n"
    
    fs.writeFile("resultado.txt", data, (err) => {
        if (err) throw err;
        console.log("Generado con exito")
    })
});

