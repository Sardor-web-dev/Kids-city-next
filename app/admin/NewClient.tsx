"use client";

const Form = () => {
  const postData = async (e: any) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get("name");
    const description = fm.get("description");
    const priceStr = fm.get("price");
    const Price = parseInt(priceStr as string);
    const Image = fm.get("imageUrl");
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
        Image,
        Price,
        Size,
        gender,
      }),
    });

    if (response.ok) {
      console.log("Post created successfully");
    } else {
      const error = await response.json();
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create post by client side</h1>
      <form onSubmit={postData} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Название товара
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Описание товара
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write your post content here..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Цена товара
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Write your post content here..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Картинка товара
          </label>
          <input
            id="ImageUrl"
            name="imageUrl"
            placeholder="Write your post content here..."
            type="string"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Размер товара
          </label>
          <input
            id="size"
            name="size"
            placeholder="Write your post content here..."
            type="string"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Гендер товара
          </label>
          <input
            id="gender"
            name="gender"
            placeholder="Write your post content here..."
            type="string"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Form;
