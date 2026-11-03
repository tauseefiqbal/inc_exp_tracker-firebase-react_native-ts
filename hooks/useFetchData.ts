import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  QueryConstraint,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "@/config/firebase";
import { useAuth } from "@/contexts/authContext";

const useFetchData = <T>(
  collectionName: string,
  constraints: QueryConstraint[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!collectionName || !user?.uid || constraints.length === 0) {
      setData([]);
      setLoading(false);
      return;
    }

    const collectionRef = collection(firestore, collectionName);
    const q = query(collectionRef, ...constraints);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(fetchedData);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, user?.uid]);

  return { data, loading, error };
};

export default useFetchData;
