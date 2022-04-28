import {
	combineReducers,
	configureStore,
	createAction,
	createReducer,
} from '@reduxjs/toolkit';

export const AddItem = createAction('items/Add');
export const RemoveItem = createAction('items/Remove');
export const FilterList = createAction('filter/Filter');

const DEFAULT_LIST = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ItemsReducer = createReducer(
	JSON.parse(localStorage.getItem('contacts')) || DEFAULT_LIST,
	{
		[AddItem]: (state, action) => [...state, action.payload],
		[RemoveItem]: (state, action) =>
			state.filter(item => item.id !== action.payload),
	}
);

const FilterReducer = createReducer('', {
	[FilterList]: (state, action) => action.payload,
});

const ContactsReducer = combineReducers({
	items: ItemsReducer,
	filter: FilterReducer,
});

export const store = configureStore({
	reducer: {
		contacts: ContactsReducer,
	},
});
