import { Prisma } from "@prisma/client"

export type AreaDto = {
    localizacao: string
    tamanho: string
    ong: Prisma.ONGSCreateNestedOneWithoutAreasInput
}
