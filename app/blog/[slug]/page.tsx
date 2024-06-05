import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Pyae Thuta - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>

    <footer className="bg-white text-black py-8 rounded mt-10 mb-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <img className="w-14 h-14 rounded-full mx-auto shadow-md" src="https://media.licdn.com/dms/image/D5603AQFreBx3_oUEQA/profile-displayphoto-shrink_800_800/0/1711788476774?e=1723075200&v=beta&t=0SfEd3MUJv2RiP-n3GCuQEQjLPr8KG0pjExdUiLyc2s" alt="Author Avatar" />
          <h4 className="text-lg font-bold">Pyae Thuta</h4>
          <p className="text-sm">IT Analyst &amp; Project Coordinator</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">About the Author</h3>
          <p className="text-sm">An IT enthusiast with well-versed technology background. Feel free to contact for a discussion or hangout. Check out more details at  
          <a href="https://pyaethuta.vercel.app" className="font-bold text-blue-600"> PORTFOLIO</a></p>
        </div>
      </div>
    </footer>

    </div>



  );
}
