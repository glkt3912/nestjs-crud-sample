import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.champion.createMany({
    data: [
      {
        name: 'Aatrox',
        role: 'Top',
        releaseDate: new Date('2013-06-13'),
        discription:
          'Aatrox is a champion that excels at dueling and split pushing.',
      },
      {
        name: 'Ahri',
        role: 'Mid',
        releaseDate: new Date('2011-12-14'),
        discription:
          'Ahri is a champion that excels at assassinating enemy champions.',
      },
      {
        name: 'Yasuo',
        role: 'Mid',
        releaseDate: new Date('2013-12-13'),
        discription:
          'Yasuo is a champion that excels at dealing damage and outplaying opponents.',
      },
      {
        name: 'Jhin',
        role: 'ADC',
        releaseDate: new Date('2016-02-01'),
        discription:
          'Jhin is a champion that excels at dealing damage from a distance.',
      },
      {
        name: 'Leona',
        role: 'Support',
        releaseDate: new Date('2011-07-13'),
        discription:
          'Leona is a champion that excels at engaging and protecting allies.',
      },
      {
        name: 'Lee Sin',
        role: 'Jungle',
        releaseDate: new Date('2011-04-01'),
        discription:
          'Lee Sin is a champion that excels at ganking and making plays.',
      },
      {
        name: 'Darius',
        role: 'Top',
        releaseDate: new Date('2012-05-23'),
        discription:
          'Darius is a champion that excels at dealing damage and tanking.',
      },
      {
        name: 'Zed',
        role: 'Mid',
        releaseDate: new Date('2012-11-13'),
        discription:
          'Zed is a champion that excels at assassinating enemy champions.',
      },
      {
        name: 'Jinx',
        role: 'ADC',
        releaseDate: new Date('2013-10-10'),
        discription:
          'Jinx is a champion that excels at dealing damage from a distance.',
      },
      {
        name: 'Thresh',
        role: 'Support',
        releaseDate: new Date('2013-01-23'),
        discription:
          'Thresh is a champion that excels at engaging and protecting allies.',
      },
      {
        name: 'Elise',
        role: 'Jungle',
        releaseDate: new Date('2012-10-26'),
        discription:
          'Elise is a champion that excels at ganking and making plays.',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    console.error(e.stack);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
