import Title from './Title';


const logos = [
  {
    name: 'JONY REYES',
    image: '/Logo Jony Reyes.png',
    color: 'hover:text-blue-600',
  },
  {
    name: 'SOLUCONTAS RP',
    image: '/LOGO SOLUCONTAS.jpg',
    color: 'hover:text-blue-600',
  },
  {
    name: 'CREATIVO',
    image: '/Creativo.png',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GRIYAC',
    image: '/GRIYAC.png',
    color: 'hover:text-blue-600',
  }
]

export default function Logos () {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title text="Logos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {logos.map((logos) => (
              <div className="bg-gray-700 p-6 border rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                             <div className="bg-transparent p-6 border-2 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                <img src={logos.image} alt={logos.name} className="w-30 h-30 transition-colors" />
                  <span className="text-white text-lg font-thin shadow-lg"> {logos.name} </span>
                </div> 
                </div>
          ))}
        </div>
      </div>
    </section>
  );
}
