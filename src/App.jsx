import "./Comprar.css"

function App() {

  return (
   <body  className='CentroXY'>
    <div className="esperandomenudorafael"> .</div>
      <div className="esperandomenudorafael2"> .</div>
     <h6>Dados pessoais</h6>
     <div className="texto1">Solicitamos apena dados essenciais para a realisação do pagamento.</div>
    

     
       <div className='bloco'>
       <p className='pp'>Nome:</p>
         <input type="text"  id="nome" />
         <p className='pp'>Email:</p>
         <input type="email"  id="email" />
         <p className='pp'>Senha:</p>
        <input type="password" id="senha" />
        <p className='pp'>Cpf    :</p>
        <input type="number" id="cpf" />
        <p className='pp'>Telefone:</p>
        <input type="number" id="telefone" />
      </div> 

      
      <h6>Pagamento</h6>
     <div className="texto1"> Escolha forma de pagar.</div>











   </body>
  )
}

export default App
