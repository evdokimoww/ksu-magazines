import React, {useReducer, useContext} from 'react'

const LanguageContext = React.createContext()

export const useLanguage = () => {
    return useContext(LanguageContext)
}

const RU_LANG = 'ru'
const EN_LANG = 'en'

const reducer = (state, action) => {
    switch (action.type) {
        case RU_LANG: return {...state, language: false}
        case EN_LANG: return {...state, language: true}
        default: return state
    }
}

export const LanguageProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        language: false
    })

    const ru = () => dispatch({type: RU_LANG})
    const en = () => dispatch({type: EN_LANG})

    return(
        <LanguageContext.Provider value={{
            language: state.language,
            ru, en
        }}>
            { children }
        </LanguageContext.Provider>
    )

}