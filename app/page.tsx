import Image from 'next/image'
import Parser from 'rss-parser'

export default function Home() {
  let Parser = require('rss-parser');
  let parser = new Parser();

  (async () => {
    let feed = await parser.parseURL('https://guyanachronicle.com/feed')
    console.log(feed.title)
    feed.items.forEach(item => {
      console.log(item);
    });
  })();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    </main>
  )
}
