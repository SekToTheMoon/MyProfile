const projects = [
  {
    num: "01",
    category: "Accounting Software",
    title: "fullsack",
    description: `จัดการข้อมูลลูกค้า พนักงาน สินค้า และตำแหน่ง พร้อมกำหนดสิทธิ์การเข้าถึงตามตำแหน่ง รองรับการจัดการบัญชีธนาคารเพื่อความสะดวกในธุรกรรมการเงิน  
ออกใบเสนอราคา ใบวางบิล ใบแจ้งหนี้ ใบเสร็จรับเงิน และใบเสร็จแบบย่อสำหรับขายหน้าร้าน  
ระบบอนุมัติเอกสารโดยหัวหน้าบัญชี เพื่อความถูกต้องและโปร่งใส  
มี Dashboard แสดงผลการดำเนินงาน
     `,
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "MySQL" },
    ],
    image: "/assets/project1.png",
    github: "https://github.com/SekToTheMoon/hubwater",
  },
  {
    num: "02",
    category: "basic CRUD",
    title: "fullsack",
    description: `เป็นเว็บที่สร้างขึ้นมาจากการอยากเรียนรู้ TypeScript และ NextJS โดยทำตาม WorkShop จาก 
    youtube ช่อง รอยไถ พัฒนา น้อยจากนั้นในโปรเจ็คนี้ยังได้ลองใช้ Clerk ในการจัดการ Users และ ใช้ Supabase ในการจัดการฐานข้อมูล
     `,
    stack: [
      { name: "NextJS" },
      { name: "Shadcn/ui" },
      { name: "Clerk" },
      { name: "Supabase" },
      { name: "Prisma" },
    ],
    image: "/assets/project2.png",
    live: "https://camping-zeta.vercel.app",
    github: "https://github.com/SekToTheMoon/Camping",
  },
];

export default projects;
