import { useEffect, useState } from 'react';
import  * as faker from 'community-faker';
import Story from './Story';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);

  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scroll scrollbar-thumb-black'>
      {suggestions.map(profile =>(
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username} />
      ))}
    </div>
  )
}

export default Stories
