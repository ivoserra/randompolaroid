import "./main.scss"

import generateFakeData from './lib/fake.js'

export default function App() {
    const data = generateFakeData().reverse()

    console.log(data)
    console.log({ data })

    return (
      <section className="wrapper">
      <section className="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Polaroid_Logo.svg/743px-Polaroid_Logo.svg.png"></img>
          
      </section>
        <main>
           {data.map(({id, name, city, image})=>{

              return  (
                  <section className="polaroid">
                    <div className="image-container">
                    <img src={image}></img>
                    </div>
                    <article>
                    <h4>Polaroid: {id}</h4>
                    <h4>{name}</h4>
                    <h4>{city}</h4>
                    </article>
                    
               </section>)
                
           })}
        </main>
        </section>
    )
}