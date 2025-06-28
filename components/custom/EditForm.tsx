'use client';

import { UploadDropzone } from '@/lib/uploadthing';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner';

export default function EditForm({ cloth }: { cloth: any }) {
  const [name, setName] = useState(cloth.name);
  const [description, setDescription] = useState(cloth.description);
  const [price, setPrice] = useState(cloth.price);
  const [gender, setGender] = useState(cloth.gender);
  const [imageUrl, setImageUrl] = useState(cloth.image);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/clothes/${cloth.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, imageUrl, gender }),
    });

    if (res.ok) {
      router.push('/admin/clothes');
      router.refresh();
    } else {
      alert('Ошибка обновления');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Название"
        className="rounded border p-2"
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Описание"
        className="rounded border p-2"
      />
      <input
        type="text"
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
        placeholder="Цена"
        className="rounded border p-2"
      />

      <label className="mb-2 block text-lg">Картинка</label>
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
      <label>Гендер</label>
      <Select value={gender} onValueChange={setGender}>
        <SelectTrigger className="w-full rounded-lg border px-4 py-2">
          <SelectValue placeholder="Гендер" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="boy">Boy</SelectItem>
          <SelectItem value="girl">Girl</SelectItem>
        </SelectContent>
      </Select>
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
        Сохранить
      </button>
    </form>
  );
}
