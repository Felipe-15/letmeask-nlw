import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

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
  likes: number;
  likeId?: string;
};

type FirebaseQuestion = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes?: Record<
    string,
    {
      authorId: string;
    }
  >;
};

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
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
            const question: FirebaseQuestion = value;
            const likes = question.likes;
            data.push({
              id: key,
              author: {
                name: question.author.name,
                avatar: question.author.avatar,
              },
              content: question.content,
              isHighlighted: question.isHighlighted,
              isAnswered: question.isAnswered,
              likes: likes ? Object.values(likes).length : 0,
              likeId: likes
                ? Object.entries(likes).find(
                    ([_, like]) => like.authorId === user?.id
                  )?.[0]
                : "",
            });
          });
          setQuestions(data);
        }
        const { title, authorId } = firebaseRawData;
        setTitle(title);
        setAuthorId(authorId);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [roomId, user?.id]);

  return { title, authorId, questions };
}
