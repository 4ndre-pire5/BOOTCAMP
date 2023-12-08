
export class CreateAreaDto{
    readonly localizacao: string;
    readonly tamanho: string;
    readonly ongId: number;
}

export class UpdateAreaDto{
    readonly localizacao?: string;
    readonly tamanho?: string;
}

// export type AreaDto = {
//     localizacao: string
//     tamanho: string
//     ong: Prisma.ONGSCreateNestedOneWithoutAreasInput
// }
