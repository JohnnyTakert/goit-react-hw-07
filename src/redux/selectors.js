import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // console.log('contacts in ContactList:');
    // console.log(contacts);
    // console.log('filter in ContactList:');
    // console.log(filter);

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
