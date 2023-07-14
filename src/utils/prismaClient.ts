import { PrismaClient } from '@prisma/client';

let prismaCLient: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaCLient = new PrismaClient();
} else {
  if (!global.prismaCLient) {
    global.prismaCLient = new PrismaClient();
  }

  prismaCLient = global.prismaCLient as PrismaClient;
}

export { prismaCLient };
