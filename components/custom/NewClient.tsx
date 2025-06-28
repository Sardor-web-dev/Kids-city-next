'use client';

import { useState } from 'react';
import { UploadDropzone } from '@/lib/uploadthing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Sizes } from '@/utils/sizes';

const Form = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [creating, SetCreating] = useState<boolean>(false);
  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size],
    );
  };

  const postData = async (e: any) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get('name');
    const description = fm.get('description');
    const priceStr = fm.get('price');
    const price = parseInt(priceStr as string);
    if (!name || !description || !gender || !imageUrl || selectedSizes.length === 0) {
      SetCreating(false);
      toast('Пожалуйста, заполните все поля');
      return;
    }

    const response = await fetch('/api/cloth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      console.log('Post created successfully');
      e.target.reset();
      setSelectedSizes([]);
      setImageUrl('');
      SetCreating(false);
    } else {
      const error = await response.json();
      console.error('Error creating post:', error);
      SetCreating(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Создать товар</h1>
      <form onSubmit={postData} className="space-y-6">
        <div>
          <Label className="mb-2 block text-lg">Название товара</Label>
          <Input type="text" name="name" className="w-full rounded-lg border px-4 py-2" />
        </div>

        <div>
          <Label className="mb-2 block text-lg">Описание товара</Label>
          <Input name="description" className="w-full rounded-lg border px-4 py-2" />
        </div>

        <div>
          <Label className="mb-2 block text-lg">Цена товара</Label>
          <Input name="price" type="number" className="w-full rounded-lg border px-4 py-2" />
        </div>

        <div>
          <Label className="mb-2 block text-lg">Картинка</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={res => {
              if (res && res[0]) {
                setImageUrl(res[0].url);
              }
            }}
            onUploadError={error => {
              const message = (error as any)?.message ?? JSON.stringify(error);
              toast.error(`Ошибка загрузки: ${message}`);
            }}
          />
          {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-2 h-32 w-32 rounded" />}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg">Выберите Гендер</p>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-full rounded-lg border px-4 py-2">
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
          onClick={() => SetCreating(true)}
          variant="outline"
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-3 text-white hover:bg-blue-600"
        >
          {!creating ? 'Создать товар' : 'Товар создается...'}
        </Button>
      </form>
    </div>
  );
};

export default Form;
