
import React from 'react'
import { useContext } from "react";
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/context';
import './Dog.css'

const Dog= () => {
  const {product,setProducts} = useContext(Mycontext) 
   const dog=product.filter((a)=>a.category=='dog')


  const nav = useNavigate()
  


  return (
    <div>
      <div>


      </div>
      <div className='container gap-5'>
      <div className=' row ' style={{background:' rgb(230, 230, 217)'}}>
        <h1 style={{fontSize:'50px'}}>Collection</h1>

        {
          dog.map((x) => {
            return (
              <div  className='col-lg-4 col-6 mt-3'>
                <Card style={{ maxwidth: '48rem' }} className='hovereffect'onClick={()=>nav(`/details/${x.id}`)}>
                  <Card.Img variant="top" src={x.img} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>
                     ${x.price}
                    </Card.Text>
                  </Card.Body>
                </Card> </div>)


          })



        }
        </div>
      </div>
    </div>
  )
}

export default Dog