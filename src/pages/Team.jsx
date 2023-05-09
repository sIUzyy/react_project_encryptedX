import profile from '../assets/team/empty-icon.webp'

const people = [
  {
    name: 'Avryl Julia',
    role: 'Chief Executive Officer / CEO',
    imageUrl: profile,
  
  },

  {
    name: 'Janelle Rempillo',
    role: 'Chief Operating Officer / COO',
    imageUrl: profile,
  
  },
  {
    name: 'Justin Peligro',
    role: 'Chief Technology Officer / CTO',
    imageUrl: profile,
  
  },

  {
    name: 'Gelai Pacapac',
    role: 'Chief Information Officer / CIO',
    imageUrl: profile,
  
  },
  {
    name: 'Charles Satorre',
    role: 'Cybersecurity Analyst',
    imageUrl: profile,
  
  },

  {
    name: 'Nathan Padua',
    role: 'Information Security Analyst',
    imageUrl: profile,
  
  },

  
 
 
  
  // More people...
]

export default function Team() {
  return (
    <div id='team' className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Meet the team behind EncryptedX - dedicated to keeping your data safe and secure.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
