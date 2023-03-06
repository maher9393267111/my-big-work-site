import Loader from '../../common/Loader'
import { StateContext } from '../../../context/index'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import Link from 'next/link'

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { signInUser } = useContext(StateContext)
    const { replace } = useRouter()
    const onSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await signInUser(email, password)
        replace('/admin')
        setLoading(false)
    }
  
  



  return (
    <div>

{loading && <Loader />}


<div class=" m-auto w-1/3 py-4">
<div class="contact-form-s1">
<form 
onSubmit={e => onSubmit(e)}
>
<input
  onChange={e => setEmail(e.target.value)}
  value={email}
type="email" name="email" placeholder="Your Email" required />
<input
 onChange={e => setPassword(e.target.value)}
 value={password}

type="password" name="password" placeholder="Password" required />
{/* <input type="email" name="email" placeholder="Your Email*" required />
<input type="text" name="subject" placeholder="Your Subject*" required /> */}
{/* <textarea name="message" cols="30" rows="10" placeholder="Message here"></textarea> */}
<button type="submit">Submit</button>
</form>
</div>
</div>




    </div>
  )
}
