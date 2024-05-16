

export const TextInput = ({ onChange, onSubmit, value }) => {
    console.log(value)
    return (
    <div>  
        <form onSubmit={onSubmit}> 
                 <p>Contacts</p>
                    <input
                    type="text"
                    name="name"
                    value={value}
                    id='id'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange}
                />
                 <p>Number</p>
                <div>
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={onChange}
                    />
                </div>

                <button type='submit'>Add Contact</button>
            </form> 
    </div>
    )
}