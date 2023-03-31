import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts: any = [];

for (let i = 0; i < 100; i++) {
  posts.push({ title: `title ${i + 1}` });
}

async function main() {
  // カテゴリの作成
  const [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8,
    category9,
    category10,
    category11,
    category12,
    category13,
    category14,
    category15,
    category16,
    category17,
    category18,
  ] = await Promise.all([
    prisma.category.create({
      data: {
        id: 1,
        name: '食費',
        color: '#FF996D',
      },
    }),
    prisma.category.create({
      data: {
        id: 2,
        name: '日用品',
        color: '#8a7a99',
      },
    }),
    prisma.category.create({
      data: {
        id: 3,
        name: '衣服',
        color: '#ccdfff ',
      },
    }),
    prisma.category.create({
      data: {
        id: 4,
        name: '美容',
        color: '#cccccc',
      },
    }),
    prisma.category.create({
      data: {
        id: 5,
        name: '交際費',
        color: '#ffccdf',
      },
    }),
    prisma.category.create({
      data: {
        id: 6,
        name: '医療費',
        color: '#708c7c',
      },
    }),
    prisma.category.create({
      data: {
        id: 7,
        name: '通信費',
        color: '#6ea8cc',
      },
    }),
    prisma.category.create({
      data: {
        id: 8,
        name: '光熱費',
        color: '#ffcc99',
      },
    }),
    prisma.category.create({
      data: {
        id: 9,
        name: '交通費',
        color: '#435443',
      },
    }),
    prisma.category.create({
      data: {
        id: 10,
        name: '教育費',
        color: '#facdc8 ',
      },
    }),
    prisma.category.create({
      data: {
        id: 11,
        name: '住居費',
        color: '#ccb8a3',
      },
    }),
    prisma.category.create({
      data: {
        id: 12,
        name: 'その他',
        color: '#cccccc',
      },
    }),
    prisma.category.create({
      data: {
        id: 13,
        name: '給料',
        color: '#2E8B57',
      },
    }),
    prisma.category.create({
      data: {
        id: 14,
        name: 'おこづかい',
        color: '#FF773E',
      },
    }),
    prisma.category.create({
      data: {
        id: 15,
        name: '賞与',
        color: '#FA8072',
      },
    }),
    prisma.category.create({
      data: {
        id: 16,
        name: '副業',
        color: '#5D99FF',
      },
    }),
    prisma.category.create({
      data: {
        id: 17,
        name: '投資',
        color: '#CD853F',
      },
    }),
    prisma.category.create({
      data: {
        id: 18,
        name: '臨時収入',
        color: '#FF5192',
      },
    }),
  ]);

  // // ユーザーの作成
  // const [user1] = await Promise.all([
  //   prisma.user.create({
  //     data: {
  //       password: '12345678',
  //       email: 'user1@example.com',
  //     },
  //   }),
  // ]);

  // postの作成
  // const [post1, post2] = await Promise.all([
  //   prisma.post.create({
  //     data: {
  //       content: 'post1 content',
  //       authorId: user1.id,
  //       categoryId: category1.id,
  //       createdAt: '2023-01-13',
  //     },
  //   }),

  //   // 必須項目だけのやつ
  //   prisma.post.create({
  //     data: {
  //       content: 'post2 content',
  //       authorId: user1.id,
  //       categoryId: category1.id,
  //       createdAt: '2023-01-13',
  //     },
  //   }),
  // ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
