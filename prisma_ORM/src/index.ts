import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.oNGS.create({
    data:{
        nome: 'ONG_3',
        cnpj: '5678901234',
        cidade: 'Limeira',
        areas:{
            create:{
                localizacao: '225789.8S 352496.6N',
                tamanho: '50 km2'
            }
        }
    }
  })

  const allONGS = await prisma.oNGS.findMany({
    include:{
        areas: true
    }
  })
  console.dir(allONGS, {depth: null})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
