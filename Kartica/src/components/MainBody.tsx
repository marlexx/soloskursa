function MainBody() {
  return (
    <div className='mainBody'>
      <h1>Neka baba</h1>
      <h5>Profesionalni pohovac nistica</h5>
      <a href='www.pohovanenistice.com' target='blank'>www.pohovanenistice.com</a>

      <div className='buttonDiv'>
        <button className='mailButton'><img src='/Mail.png'></img>Email</button>
        <button className='lnButton'><img src='/linkedin.png'></img>Linkedin</button>
      </div>

      <div className='about'>
        <h1>About Me:</h1>
        <p>
Ja sam Neka baba, čarobnjak pohovane umetnosti. Moj specijalitet su nežne nistice, pažljivo umotane u hrskavi omotač. Svaka zalogaj predstavlja simfoniju ukusa, spoj tradicije i savršenstva koji ostavlja bez daha. Moje pohovane nistice nisu samo jelo, već iskustvo koje se pamti kroz svaki slasni trenutak.
</p>
<h1>Interests:</h1>
<p> 
Pored pohovanja, strastveno pletim kuhinjske krpare od recikliranog materijala, pretvarajući svaki komad u mali umetnički izraz. Kada ne vezujem čvorove, istražujem zaboravljene recepte iz starih kulinarskih knjiga.
</p>
      </div>
    </div>
  )
}

export default MainBody