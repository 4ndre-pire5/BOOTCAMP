import { Prisma } from "@prisma/client";

// export type OngDto = {
//     nome: string;
//     cnpj: string;
//     cidade: string;
//     areas?: Prisma.AreasCreateNestedManyWithoutOngInput;
// }

export class CreateOngDto{
    readonly nome: string;
    readonly cnpj: string;
    readonly cidade: string;
}

export class UpdateOngDto{
    readonly nome?: string;
    readonly cidade?: string;
}

