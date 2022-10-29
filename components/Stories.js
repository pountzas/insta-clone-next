import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
      avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
      username: [faker.name.firstName(), faker.name.lastName()].join(' '),
    }));
    setSuggestions(suggestions);

  }, []);

  return (
    <div className='flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-thin scroll scrollbar-thumb-black'>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map(profile => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username} />
      ))}
    </div>
  )
}

export default Stories
