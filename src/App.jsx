import iconsedans from "./assets/icon-sedans.svg"
import iconssuvs from "./assets/icon-suvs.svg"
import iconsluxury from "./assets/icon-luxury.svg"

export default function App() {
  return(
  <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
    <section className="lg:flex ">

      <div className="bg-orange p-12 rounded-t-lg">
        <img src={iconsedans} alt="icone dos carros sedans" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxwx1G7sp3gzwJLiCK7sGJ9AEhvhMTNm5TCN7Ssx_JxEf8v0nK9ozwxoCuH4QAvD_BwE" target="_blank" >Ver mais</a>
      </div>

      <div className="bg-green p-12">
        <img src= {iconssuvs} alt="icone dos carros suvs" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
        <p className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs?idcmp=s08%3Ac13%3Acc5557bdc18f4ebb8d2de994389066c7&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxx-pXJTYe8irQ6rwFPFrOiCPeCLN8UW2PW1rY4aqkgiAGwFrx-sE5RoC5XAQAvD_BwE" target="_blank"> Ver mais</a>
      </div>

      <div  className="bg-dark-green p-12 rounded-b-lg">
        <img src={iconsluxury} alt="icone dos carros luxury" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
        <p className="font-lexend mb-7 text-offwhite ">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
      </div>

    </section>
  </main>
  )
}