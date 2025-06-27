import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ConsumerViewRedirect() {
  const router = useRouter();

  useEffect(() => {
    const { animalId } = router.query;
    if (animalId) {
      router.replace(`/consumer-view/${animalId}`);
    }
  }, [router]);

  return <p className="text-center mt-10">Redirecting...</p>;
}
