import Section from './section/section';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import { List } from './App.styled';
import Filter from './filter/filter';
import shortid from 'shortid';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const DEFAULT_LIST = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
function App() {
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem('contacts')) || DEFAULT_LIST
    );
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (localStorage.getItem('contacts')) {
            const cont = JSON.parse(localStorage.getItem('contacts'));
            setContacts(cont);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const normalizeFilter = filter.toLowerCase();
    const filterCurrentName = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
    );

    function addContactItem(name, number) {
        const contact = {
            id: shortid.generate(),
            name,
            number,
        };
        setContacts([contact, ...contacts]);
    }

    const onFilter = e => {
        setFilter(e.target.value);
    };

    const deleteContacts = id => {
        setContacts(prevState => contacts.filter(prev => prev.id !== id));
    };

    return (
        <>
            <Section title="Phonebook">
                <ContactForm
                    onAdd={addContactItem}
                    filterContact={filterCurrentName}
                />
            </Section>
            {contacts.length === 0 ? (
                'No contacts yet'
            ) : (
                <Section title="Contacts">
                    <Filter filterString={filter} onChange={onFilter} />
                    <List>
                        <ContactList
                            contList={filterCurrentName}
                            deleteCont={deleteContacts}
                        />
                    </List>
                </Section>
            )}
            <Toaster />
        </>
    );
}

export default App;
