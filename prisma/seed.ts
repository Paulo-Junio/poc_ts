import prisma from "../src/database/db.js";

async function main() {
  await prisma.responsible.create({
    data: {
        name: "Jorge",
        surname:"Jorginho",
        contact:"37986321978"
    }
  });

  await prisma.status.create({
    data: {
        statusName:"canceled"
    }
  })

  await prisma.to_do.create({
    data: {
        name: "limpar quintal",
        description: "limpar o cocô do cachorro",
        resposibleId:1,
        statusId: 2
    }
  })
}

main().then(() => {
  console.log("inserções via seed concluidas");
}).catch((e) => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})