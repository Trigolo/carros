import iconsedans from "./assets/icon-sedans.svg"
import iconssuvs from "./assets/icon-suvs.svg"
import iconsluxury from "./assets/icon-luxury.svg"

export default function App() {
  return(
  <main>
    <section>

      <div className="bg-orange">
        <img src={iconsedans} alt="icone dos carros sedans" />
        <h2>Sedans</h2>
        <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxwx1G7sp3gzwJLiCK7sGJ9AEhvhMTNm5TCN7Ssx_JxEf8v0nK9ozwxoCuH4QAvD_BwE" target="_blank" >Ver mais</a>
      </div>

      <div className="bg-green">
        <img src= {iconssuvs} alt="icone dos carros suvs" />
        <h2>SUVs</h2>
        <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a href="https://www.webmotors.com.br/suvs?idcmp=s08%3Ac13%3Acc5557bdc18f4ebb8d2de994389066c7&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxx-pXJTYe8irQ6rwFPFrOiCPeCLN8UW2PW1rY4aqkgiAGwFrx-sE5RoC5XAQAvD_BwE" target="_blank"> Ver mais</a>
      </div>

      <div  className="bg-dark-green">
        <img src={iconsluxury} alt="icone dos carros luxury" />
        <h2>Luxuosos</h2>
        <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
      </div>

    </section>
  </main>
  )
}