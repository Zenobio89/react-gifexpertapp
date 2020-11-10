import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

export const AgregarFrutas = ({setfrutas}) => {

    const [agregarFrutas, setAgregarFrutas] = useState('')

    const frutasFn =  (e) => {
        setAgregarFrutas(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (agregarFrutas.trim().length > 0) {
            setfrutas(fruta => [agregarFrutas])
            setAgregarFrutas('')
        }
    }
    
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={agregarFrutas}
                    onChange={frutasFn}
                >
                </input>
            </form>
        </Fragment>
    )
}

AgregarFrutas.propTypes = {
    setfrutas: PropTypes.func.isRequired
}

  