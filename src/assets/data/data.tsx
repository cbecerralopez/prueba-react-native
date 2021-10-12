import { UserState } from "../../context/UsersContext";

export const data: UserState[] = [{
    id: 1,
    nombre: "claudio",
    apellido: "becerra",
    userName: "cbecerra",
    email: "cbecerra@kvalue.cl",
    password: "1234",
    estado: true,
    createBy: "master",
    dateCreate: "25/07/2021"

},
{
    id: 2,
    nombre: "michael",
    apellido: "fuentes",
    userName: "mfuentes",
    email: "mfuentes@kvalue.cl",
    password: "12345",
    estado: true,
    createBy: "cbecerra",
    dateCreate: "05/09/2021"

},
{
    id: 3,
    nombre: "soledad",
    apellido: "huaquil",
    userName: "shuaiquil",
    email: "shuaiquil@kvalue.cl",
    password: "1234",
    estado: true,
    createBy: "mfuentes",
    dateCreate: "02/08/2021"
},
{
    id: 4,
    nombre: "jose",
    apellido: "perez",
    userName: "jperez",
    email: "jperez@kvalue.cl",
    password: "3212",
    estado: true,
    createBy: "mfuentes",
    dateCreate: "03/05/2021"
}
]