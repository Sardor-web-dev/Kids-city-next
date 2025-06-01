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
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Sizes } from "@/utils/sizes";

const Form = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [gender, setGender] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const postData = async (e: any) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get("name");
    const description = fm.get("description");
    const priceStr = fm.get("price");
    const price = parseInt(priceStr as string);
    if (
      !name ||
      !description ||
      !gender ||
      !imageUrl ||
      selectedSizes.length === 0
    ) {
      toast("Пожалуйста, заполните все поля");
      return;
    }

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
        size: selectedSizes,
      }),
    });

    if (response.ok) {
      console.log("Post created successfully");
      e.target.reset();
      setSelectedSizes([]);
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
          <Label className="block text-lg mb-2">Название товара</Label>
          <Input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <Label className="block text-lg mb-2">Описание товара</Label>
          <Input
            name="description"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <Label className="block text-lg mb-2">Цена товара</Label>
          <Input
            name="price"
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <Label className="block text-lg mb-2">Картинка</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res && res[0]) {
                setImageUrl(res[0].url);
              }
            }}
            onUploadError={(error: Error) => {
              toast(`Ошибка загрузки: ${error.message}`);
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

        <div className="flex flex-col gap-2">
          <p className="text-lg">Выберите Размеры</p>
          <div className="flex flex-col gap-2">
            {Sizes.map((item, i) => (
              <Label key={i} className="flex items-center gap-2">
                <Checkbox
                  checked={selectedSizes.includes(item.size)}
                  onCheckedChange={() => handleSizeChange(item.size)}
                  className="cursor-pointer"
                />
                <span>{item.size}</span>
              </Label>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Создать товар
        </Button>
      </form>
    </div>
  );
};

export default Form;
