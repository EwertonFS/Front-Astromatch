
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChooseButtons from './ChooseButtons'
import ProfileCard from './ProfileCard'



function ChooseProfilePage(){
    
    const [profileToChoose , setProfileToChoose] = useState(undefined)
    
    const getProfileToChoose = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ewerton-moreira/person')
        .then(response=>{
            setProfileToChoose(response.data.profile)
        })
    }
    
    const chooseProfile = (choice) =>{
        const body = {
            choice:choice,
            id:profileToChoose.id
          }

          setProfileToChoose(undefined)

         axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ewerton-moreira/choose-person',body).then(response=>{
          console.log(response)
          getProfileToChoose()
         })
    }

    useEffect(()=>{
       getProfileToChoose()
    },[])

    const onclickNo = () =>{
       chooseProfile(false)
    }


    const onclickYes = () =>{
        chooseProfile(true)
    }
    
    return(
        <div>
            { profileToChoose ?
            (<>
               <ProfileCard profile={profileToChoose} />
                <ChooseButtons onclickNo={onclickNo} onclickYes={onclickYes}/>
            </>):<p>Carregando...</p>
            }
        </div>
    )
}

export default ChooseProfilePage