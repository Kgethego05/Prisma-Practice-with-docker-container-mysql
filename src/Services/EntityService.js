
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async () => {
  return await prisma.User.findMany();
};

exports.getById = async (id) => {
  return await prisma.User.findUnique({
    where: { id: Number(id) },
  });
};

exports.create = async (data) => {
  const newEntity = await prisma.User.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return newEntity;
};
