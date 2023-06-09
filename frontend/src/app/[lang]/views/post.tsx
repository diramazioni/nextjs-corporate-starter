import { formatDate, getStrapiMedia } from '@/app/[lang]/utils/api-helpers';
import { postRenderer } from '@/app/[lang]/utils/post-renderer';
import Image from 'next/image';

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        authorsBio: {
            data: {
                attributes: {
                    name: string;
                    avatar: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
        blocks: any[];
        publishedAt: string;
    };
}

export default function Post({ data }: { data: Article }) {
    const { title, description, publishedAt, cover, authorsBio } = data.attributes;
    const author = authorsBio.data?.attributes;
    const imageUrl = getStrapiMedia(cover.data?.attributes.url);
    const authorImgUrl = getStrapiMedia(authorsBio.data?.attributes.avatar.data.attributes.url);

    return (
        <article className="space-y-8 bg-col dark:text-gray-50">
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )}
            <div className="space-y-16 p-11">
                <h1 className="leading-tight text-4xl font-bold text-teal-200">{title}</h1>
                <h2 className='text-3xl text-teal-300'>{description}</h2>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        {authorImgUrl && (
                            <Image
                                src={authorImgUrl}
                                alt="article cover image"
                                width={400}
                                height={400}
                                className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            />
                        )}
                        <p className="text-md dark:text-teal-400">
                            {author && author.name} • {formatDate(publishedAt)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="dark:text-gray-100 m-2 sm:p-2 md:p-4 lg:p-6">
                {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
            </div>
        </article>
    );
}
