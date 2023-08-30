'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Parser from 'rss-parser';
import DOMPurify from 'dompurify';

export default function Home() {
  /* Using the use effect hook instead */

  const CORS_PROXY = "https://corsproxy.io/?"
  let parser = new Parser();

  const [feed, setFeed] = useState<any>([]);


  async function getFeed() {
    try {


      // /* let's keep the most up to date version of the feed */
      // setFeed(feed)

      const response = await axios.get(`${CORS_PROXY}https://bigsmithnewswatch.com/feed/`);
      const parseFeed = await parser.parseString(response.data)
      console.log(parseFeed)
      setFeed(parseFeed.items)
      console.log(feed)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <main className="">
      <nav className='flex items-center justify-between flex-wrap bg-slate-800 p-6'>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">News Scraper</span>
        </div>
        <div className="justify-center lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#feed" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Feed
            </a>
            <a href="#sources" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Sources
            </a>
            <a href="#buymecoffeeplease" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Buy Me Coffee Please
            </a>
          </div>
        </div>
      </nav>

      <div>
        <h1>Feed</h1>
        {feed.length > 0 ? (
          <ul>
            {feed.map((item: any, index: number) => (
              <li key={index}>
                <h2>{item.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    // Use contentSnippet instead for now
                    __html: DOMPurify.sanitize(item.contentSnippet),
                  }}
                />

              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>



    </main>
  )
}
