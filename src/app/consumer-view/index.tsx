// pages/consumer-view/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ConsumerRedirect() {
  const router = useRouter();

  useEffect(() => {
    const query = router.query.animalId;
    if (query) {
      router.replace(`/consumer-view/${query}`);
    }
  }, [router]);

  return <p>Redirecting to consumer view...</p>;
}
