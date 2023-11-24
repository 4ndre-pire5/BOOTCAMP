import { Prisma } from "@prisma/client";

export type OngDto = {
    nome: string;
    cnpj: string;
    cidade: string;
    areas?: Prisma.AreasCreateNestedManyWithoutOngInput;
}
