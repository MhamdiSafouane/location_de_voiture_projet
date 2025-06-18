import React,{useState,useEffect} from 'react';
import './Style/filter.css';


function FilterHeader() {
  
      const [querry, setQuerry] = useState("");
  
      const search = (data) => {
          return data.filter(
              (item) =>
                  item.type.toLowerCase().includes(querry) ||
                  item.milage.toLowerCase().includes(querry)
                 
          );
      };
  
   return (
      <div id="form">
         <div id="button">
            
            <select className="select" onChange={(e) => setQuerry(e.target.value)}>
            
               <option>Type lkarhba</option>
               <option>XUV</option>
               <option>UV</option>
               <option>LKOL</option>
            </select>
   
            <select className="select" onChange={(e) => setQuerry(e.target.value)} >
             
               <option>Milage (10000)</option>
               <option>10KM/L</option>
               <option>20KM/L</option>
               <option>15KM/L</option>
            </select>

            <select className="select" onChange={(e) => setQuerry(e.target.value)}>
           
               <option>Seater</option>
               <option>10</option>
               <option>6</option>
               <option>4</option>
            </select>

         </div>
         <div>
         
         </div>
      </div>

   )
}
export default FilterHeader;