import React, {createContext} from 'react'

export const CredentialsContext = createContext({storedCredentials: {}, setStoredCredentials: () => {}})
