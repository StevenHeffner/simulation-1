module.exports = {
  getAll: (req, res) =>{
    const db = req.app.get('db');

    db.get_inventory()
    .then( inventory => res.status(200).send( inventory ) )
    .catch( () => res.status(500).send() );
  },
  addProd:(req, res) => {
    const db = req.app.get('db');
    const { name, price, img } = req.body;
    
    db.add_product([name, price, img])
    
    .then(() =>{ console.log("Hit"); res.status(200).send("Heller")})
    .catch( () => res.status(500).send() );



  }


}