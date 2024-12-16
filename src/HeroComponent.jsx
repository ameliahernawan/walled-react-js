import foto from './foto.png'; // './' menandakan lokasi relatif

const HeroComponent = () => {
  return (
    <div className="flex justify-between items-center m-20">
      <div>
        <h1 className="text-4xl font-bold mb-2">Good Morning, Amel</h1>
        <p className="text-gray-600">Check all your incoming and outgoing transactions here</p>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <p className="text-right font-bold">Amelia Hernawan</p>
          <p className="text-gray-600 text-sm">Personal Account</p>
        </div>
        <div className="flex w-24 h-24 rounded-full content-center overflow-hidden bg-teal-600">
          <img src={foto} alt="foto" className="w-20 h-20 m-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
