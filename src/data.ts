export type Message = {
  gif: string;
  text: string;
};

export type Photo = {
  image: string;
  text: string; // the caption
};

export const messages: Message[] = [
  { gif: "/gifs/1.gif", text: "I messed up ... and I'm really sorry for that  🥺" },
  { gif: "/gifs/2.gif", text: "Please forgive me... You mean so much to me  " },
  { gif: "/gifs/3.gif", text: "I promise to do better." },
];

export const note = "I’m really sorry, baby. ❤️ Mujhe pata hai ki main baar-baar tumhe upset kar deta hoon, aur kabhi-kabhi khud bhi nahi samajh pata ki meri baaton ya harkaton se tumhe kitna hurt hota hai. Tum deserve nahi karti ki jis insaan se tum itna pyaar karti ho, wahi tumhe baar-baar pareshan kare. 🥺 I know sirf sorry bolne se sab theek nahi hota, especially jab main same mistakes repeat karta hoon. But trust me, I really want to work on myself and become better for us. Tum mere liye bahut important ho, aur main kabhi nahi chahta ki meri wajah se tumhari smile kam ho jaaye. ❤️ I’m sorry for all the times I made you angry, hurt you, or made you feel ki main tumhari feelings nahi samajhta. I love you so much, and main chahta hoon ki tumhe mere words se nahi, meri actions se bhi feel ho ki tum mere liye kitni special ho. Please mujhe thoda time dena to prove that. I love you, meri jaan. 🫶🏻❤️";

export const photos: Photo[] = [
  { image: "/photos/1.jpg", text: "Caption 1" },
  { image: "/photos/2.jpg", text: "Caption 2" },
  { image: "/photos/3.jpg", text: "Caption 3" },
  { image: "/photos/4.jpg", text: "Caption 4" },
  { image: "/photos/5.jpg", text: "Caption 5" },
];

export const finalText = "Thank you for forgiving me. I love you 💖";