import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next";
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const method = req.method;
  
//     switch (method) {
//       case 'GET':
//         const musics = await prisma.musics.findMany();
//         const musicJSON = JSON.stringify(musics, (key, value) =>
//           typeof value === 'bigint' ? value.toString() : value
//         );      
//         return new Response(musicJSON, {status: 200,});
//       case 'POST': 
//         try {
//           const { title, artist, ...otherData } = req.body; 
//           const newMusic = await prisma.musics.create({
//             data: { title, artist, ...otherData }, 
//           });
//           return res.status(201).json(newMusic); 
//         } catch (error) {
//           console.error('Error creating music:', error);
//           return res.status(500).json({ message: 'Internal Server Error' }); 
//         }
  
//       default:
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   }
  
//   export {handler as POST , handler as GET};
  
  
  
  