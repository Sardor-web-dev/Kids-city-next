"use client";

import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Form = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [gender, setGender] = useState("");

  const postData = async (e: any) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get("name");
    const description = fm.get("description");
    const priceStr = fm.get("price");
    const price = parseInt(priceStr as string);
    const response = await fetch("/api/cloth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        description,
        Image: imageUrl,
        gender,
      }),
    });
    if (!name || !description || !gender || !imageUrl) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    if (response.ok) {
      console.log("Post created successfully");
      e.target.reset();
      setGender("");
      setImageUrl("");
    } else {
      const error = await response.json();
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Создать товар</h1>
      <form onSubmit={postData} className="space-y-6">
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
          <label className="block text-lg mb-2">Цена товара</label>
          <textarea
            name="price"
            rows={4}
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

        <div className="flex flex-col gap-2">
          <p className="text-lg">Выберите Гендер</p>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-full px-4 py-2 border rounded-lg">
              <SelectValue placeholder="Гендер" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boy">Boy</SelectItem>
              <SelectItem value="girl">Girl</SelectItem>
            </SelectContent>
          </Select>
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
