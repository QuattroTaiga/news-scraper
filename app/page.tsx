'use client';
import Image from 'next/image'
import { useEffect} from 'react';
import Parser from 'rss-parser'

export default function Home() {
  /* Using the use effect hook instead */

  // let Parser = require('rss-parser');
  // let parser = new Parser();

  // (async () => {
  //   let feed = await parser.parseURL('https://bigsmithnewswatch.com/feed/')
  //   console.log(feed.title)
  //   feed.items.forEach(item => {
  //     console.log(item);
  //   });
  // })();

   useEffect(() => {
  const fetchData = async () => {
    const parser = new Parser();
    try {
      const feed = await parser.parseURL('https://corsanywhere.herokuapp.com/https://bigsmithnewswatch.com/feed/');
      console.log(feed.title);
      feed.items.forEach(item => {
        console.log(item);
      });
    } catch (error) {
      console.log('Nothing came back', error)
    }
  };
  fetchData();
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

    

    </main>
  )
}
