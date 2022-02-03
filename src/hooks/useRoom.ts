import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { onValue, ref } from "firebase/database";

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export function useRoom(roomId: string) {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(
      ref(database, `rooms/${roomId}`),
      (snapshot) => {
        const data: Question[] = [];
        const firebaseRawData = snapshot.val();
        if (firebaseRawData.questions) {
          const { questions: rawQuestions } = firebaseRawData;
          const firebaseQuestions = Object.entries(rawQuestions);

          firebaseQuestions.forEach(([key, value]: [string, any]) => {
            const question: Question = value;
            data.push({
              id: key,
              author: {
                name: question.author.name,
                avatar: question.author.avatar,
              },
              content: question.content,
              isHighlighted: question.isHighlighted,
              isAnswered: question.isAnswered,
            });
          });
          setQuestions(data);
        }
        const { title } = firebaseRawData;
        setTitle(title);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [roomId]);

  return { title, questions };
}
