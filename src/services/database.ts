import { ref, push, onValue } from "firebase/database";
import { auth } from "@/lib/firebase";
import { database } from "@/lib/firebase";

/* =========================
   SAVE DATA (WRITE)
========================= */
export const savePayment = async (amount: number) => {
  if (!auth.currentUser) return;

  return push(ref(database, "payments"), {
    userId: auth.currentUser.uid,
    amount,
    status: "pending",
    createdAt: Date.now(),
  });
};

/* =========================
   READ DATA (LIVE)
========================= */
export const listenPayments = (callback: (data: any) => void) => {
  const paymentsRef = ref(database, "payments");

  onValue(paymentsRef, (snapshot) => {
    callback(snapshot.val());
  });
};
