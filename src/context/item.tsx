import React, { createContext, useState, useContext, useCallback } from 'react'
import { uuid } from 'uuidv4'

export interface ItemNotes {
  id: string;
  text: string;
}

interface ItemShow {
  (note: Omit<ItemNotes, 'id'>): string
}

interface ItemHide {
  (id: string): void
}

interface ItemEdit {
  (id: string, newText: string): void
}

interface ItemContext {
  list: ItemNotes[];
  addItem: ItemShow;
  removeItem: ItemHide;
  editItem: ItemEdit;
}

const ItemContext = createContext<ItemContext | null>(null)

const ItemProvider: React.FC = ({ children }) => {
  const [list, setList] = useState<ItemNotes[]>([])

  const editItem = useCallback<ItemEdit>((id, newText) => {
    setList(state => state.map(item => {
      if (item.id === id) item.text = newText;
      return item
    }))
  }, [])

  const removeItem = useCallback(id => {
    setList(state => state.filter(item => item.id !== id))
  }, [])

  const addItem = useCallback<ItemShow>(note => {
    const id = uuid()

    setList(state => [...state, { ...note, id }])

    return id
  }, [])

  return (
    <ItemContext.Provider value={{ addItem, removeItem, editItem, list }}>
      {children}
    </ItemContext.Provider>
  )
}

function useList(): ItemContext {
  const context = useContext(ItemContext)

  if (!context) {
    throw new Error('useList must be used within a ItemContext')
  }

  return context
}

export { ItemProvider, useList }