import fondo from '../../img/pair-gloves-boxing-sport.jpg';

function Banner() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${fondo})`
        }}
      ></div>
    </section>
  );
}

export default Banner;
