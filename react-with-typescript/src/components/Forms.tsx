import { useForm } from '../hooks/useForm';

export const Forms = () => {


    const {password, email, form, onChange } = useForm({
        email:"samir.jc123@gmail.com",
        password:"1234"
    })

  
  return (
    <div className='flex flex-col'>
        <h3>Formularios</h3>
        <input
            type="text"
            placeholder="email"
            value={form.email}
            name="email"
            onChange={ ({ target }) => onChange(target.value, 'email')}
        />
         <input
            type="text"
            placeholder="email"
            value={form.password}
            name="password"
            onChange={ ({ target }) => onChange(target.value, 'password')}

        />

        <code>
            <pre>
                {JSON.stringify(form, null, 2)}
            </pre>
        </code>
    </div>
  )
}
