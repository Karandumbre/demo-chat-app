import ColorPicker from "../utils/color-picker";

const user1 = ColorPicker();

export const currentMember = {
  id: "2",
  username: "Rachel",
  color: ColorPicker(),
};

const otherUser = {
  id: "1",
  username: "John doe",
  color: user1,
};

export const MessageArray = [
  {
    ...currentMember,
    text: "Hello friend, How do you do?",
  },
  { ...otherUser, text: "I am fine, thank you. Why are you looking so sad?" },
  {
    ...currentMember,
    text: "Actually I am worried about my final examination. ",
  },
  {
    ...currentMember,
    text: "What about your preparation for the examination?",
  },
  {
    ...otherUser,
    text: "Well, I’m going on well my studies. I am also worried about my exam.",
  },
  {
    ...currentMember,
    text: "But tell me about your preparation in different subjects.",
  },
  {
    ...otherUser,
    text: "You know I’m weak in English.  ",
  },
  {
    ...otherUser,
    text: "That’s why, I’m taking special care in English.",
  },
  {
    ...otherUser,
    text: "I’m having a detailed revision in other subjects.",
  },
  {
    ...currentMember,
    text: "Are you taking help from any special books?",
  },
  {
    ...otherUser,
    text: "Yes but I study text books very carefully.",
  },
  {
    ...currentMember,
    text: "I see. I must start working with the text books. What do you think?",
  },
  {
    ...otherUser,
    text: "Yes. I think it’ll be very helpful not only for English but also for other subjects.",
  },
  {
    ...currentMember,
    text: "Thank you for your supportive suggestion.",
  },
  {
    ...currentMember,
    text: " I wish you good luck.",
  },
  { ...otherUser, text: "You are most welcome." },
];
