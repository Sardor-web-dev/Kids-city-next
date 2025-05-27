"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditForm({ cloth }: { cloth: any }) {
  const [name, setName] = useState(cloth.name);
  const [description, setDescription] = useState(cloth.description);
  const [price, setPrice] = useState(cloth.price);
  const [imageUrl, setImageUrl] = useState(cloth.image);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/clothes/${cloth.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, imageUrl }),
    });

    if (res.ok) {
      router.push("/admin/clothes");
      router.refresh();
    } else {
      alert("Ошибка обновления");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название"
        className="border p-2 rounded"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
        className="border p-2 rounded"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Цена"
        className="border p-2 rounded"
      />

      <label className="block text-lg mb-2">Картинка</label>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res[0]) {
            setImageUrl(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          alert(`Ошибка загрузки: ${error.message}`);
        }}
      />
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" className="w-32 h-32 mt-2 rounded" />
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Сохранить
      </button>
    </form>
  );
}
