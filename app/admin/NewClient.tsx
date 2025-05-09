"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";

const Form = () => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");

  const postData = async (e: any) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get("name");
    const description = fm.get("description");
    const priceStr = fm.get("price");
    const Price = parseInt(priceStr as string);
    const Size = fm.get("size");
    const gender = fm.get("gender");

    const response = await fetch("/api/cloth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        Image: imageUrl,
        Price,
        Size,
        gender,
      }),
    });

    if (response.ok) {
      console.log("Post created successfully");
      router.push("/catalogue");
    } else {
      const error = await response.json();
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Создать товар</h1>
      <form onSubmit={postData} className="space-y-6">
        {/* Остальные поля */}
        <div>
          <label className="block text-lg mb-2">Название товара</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Описание товара</label>
          <textarea
            name="description"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Цена</label>
          <input
            type="number"
            name="price"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
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
            <img
              src={imageUrl}
              alt="Uploaded"
              className="w-32 h-32 mt-2 rounded"
            />
          )}
        </div>

        <div>
          <label className="block text-lg mb-2">Размер</label>
          <input
            type="text"
            name="size"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Гендер</label>
          <input
            type="text"
            name="gender"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Создать товар
        </button>
      </form>
    </div>
  );
};

export default Form;
