import React ,{ useState, useEffect,createContext} from "react";

export const SebedimContext = createContext();

const SebedimContextProvider = (props)=>{
    
    
    let localData;
        const harytlar =localStorage.getItem("sebedim");
    if(harytlar){
        localData = JSON.parse(harytlar);
    }
    else{
        localData = [];
    }
  
    const [sebedim,setSebedim]=useState(localData);    

    const  Increment = async(id,sany)=>{
        let haryt;
        let num ;
        await sebedim.map((sebet,no)=>{
            if(sebet.id===id){
                haryt=sebet;
                num=no;
            }
            
        return null;
        });
        if(sany){
            haryt.sany=haryt.sany+sany;
        }else{
            haryt.sany=haryt.sany+1;
        }
        
        let sebet = []; 
        await sebedim.map((obj,index)=>{
            if(index===num){
                sebet.push(haryt);
            }else{
                sebet.push(obj);
            }
            
        return null;
        })      
         setSebedim(
                sebet 
        );
    }
    const  Decrement = async(id,sany)=>{
        let haryt;
        let num ;
        await sebedim.map((sebet,no)=>{
            if(sebet.id===id){
                haryt=sebet;
                num=no;
            }
            
        return null;
        });
        haryt.sany=haryt.sany-1;
        
        let sebet = []; 
        await sebedim.map((obj,index)=>{
            if(index===num){
                sebet.push(haryt);
            }else{
                sebet.push(obj);
            }
            
        return null;
        })      
         setSebedim(
                sebet 
        );
    }
    const AddTo = async(id,name,description,baha)=>{
        let barmy=false;
             await sebedim.map((haryt)=>{
                if(haryt.id===id){
                   Increment(id);
                   barmy=true;
                }
                
        return null;
            });
            if(!barmy){   
                let harytlar = sebedim;
                harytlar.push() ;        
                    setSebedim([
                        ...sebedim,
                        {
                            id,
                            name,
                            description,
                            sany:1,
                            baha
                            }
                    ]);
                }
    }
    const AddToMany = async(id,name,description,baha,sany)=>{
        let barmy=false;
             await sebedim.map((haryt)=>{
                if(haryt.id===id){
                   Increment(id,sany);
                   barmy=true;
                }
                
        return null;
            });
            if(!barmy){   
                let harytlar = sebedim;
                harytlar.push() ;        
                    setSebedim([
                        ...sebedim,
                        {
                            id,
                            name,
                            description,
                            sany,
                            baha
                            }
                    ]);
                }
    }
    const Remove = async(id)=>{
        const harytlar = await sebedim.filter((haryt)=>{
            return id !== haryt.id;
        });
         setSebedim(harytlar);

    }
    useEffect(()=>{
        
            localStorage.setItem("sebedim",JSON.stringify(sebedim));
        
    },[sebedim]);

  
   

    return(
        <SebedimContext.Provider value={{sebedim ,Increment,Decrement,AddTo,AddToMany,Remove}}>
            {props.children}
        </SebedimContext.Provider>
    );
};

export default SebedimContextProvider;