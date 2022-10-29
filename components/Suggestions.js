import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => (
      {
        id: i,
        avatar: 'https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng=',
        username: [faker.name.firstName(), faker.name.lastName()].join(' '),
        company: faker.company.bs(),
      }
    ));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between mb-5 test-sm'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestion for you</h3>
        <button className='font-semibold text-gray-600'>See all</button>
      </div>

      {suggestions.map(profile => (
        <div
          key={profile.id}
          className='flex items-center justify-between mt-3'
        >
          <img
            className='w-10 h-10 rounded-full border p-[2px]' src={profile.avatar} alt=""
          />

          <div className='flex-1 ml-4'>
            <h2 className='text-sm font-semibold text-gray-700'>
              {profile.username}
            </h2>
            <h3 className='text-sm text-gray-400 '>
              Works at {profile.company}
            </h3>
          </div>

          <button className='text-xs font-bold text-blue-400'>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions
