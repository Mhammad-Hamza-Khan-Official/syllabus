import { collection, addDoc, serverTimestamp, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

// CREATE
export const createAttempt = async (data) => {
  const safeNumber = (value) =>
    typeof value === "number" ? value : Number(value) || 0;

  try {
    // Write directly to your top-level "Individual Quiz Result" collection
    return await addDoc(collection(db, "Individual Quiz Result"), {
      userId: data.userId,
      quizId: data.quizId,
      score: safeNumber(data.score),
      positiveScore: safeNumber(data.positiveScore),
      negativeScore: safeNumber(data.negativeScore),
      timeTaken: safeNumber(data.timeTaken),
      createdAt: serverTimestamp(),
      correctAnswers: Array.isArray(data.correctAnswers)
        ? data.correctAnswers
        : [],
      wrongAnswers: Array.isArray(data.wrongAnswers) ? data.wrongAnswers : [],
      marked: Array.isArray(data.marked) ? data.marked : [],
      type: data.type ?? null,
    });
  } catch (error) {
    console.error("Firestore saving error:", {
      code: error?.code,
      message: error?.message,
      stack: error?.stack,
    });
    throw error;
  }
};

async function getSingleQuizResult() {
  // Path: Collection -> Document ID
  const docRef = doc(db, "Individual Quiz Result", "BF7MPvwqEBmLUeP5SKt4");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    
    // Accessing individual fields from your screenshot:
    const data = docSnap.data();
    console.log("Score:", data.score);
    console.log("User ID:", data.userId);
  } else {
    console.log("No such document found!");
  }
}

getSingleQuizResult

async function getAllQuizResults() {
  const querySnapshot = await getDocs(collection(db, "Individual Quiz Result"));
  
  querySnapshot.forEach((doc) => {
    // doc.id provides the random string (e.g., BF7MPvwqEBmLUeP5SKt4)
    console.log(`Document ID: ${doc.id}`);
    // doc.data() returns the actual object fields
    console.log(doc.data());
  });
}

getAllQuizResults


async function getUserResults(email) {
  const q = query(
    collection(db, "Individual Quiz Result"), 
    where("userId", "==", email)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Example usage based on your screenshot's userId field
getUserResults
