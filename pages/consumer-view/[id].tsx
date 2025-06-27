import { useRouter } from "next/router";

export default function ConsumerViewPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Consumer View ✅</h1>

      <p className="text-lg">Animal ID: <strong>{id}</strong></p>
    </div>
  );
}
