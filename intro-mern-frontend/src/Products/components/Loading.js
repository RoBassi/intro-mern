import React from 'react'
import { Loader } from 'react-bulma-components';

const style = {
    width: 100,
    height: 100
};

const Loading = () => {
    return <div className="columns is-centered">
        <Loader style={style} >
        </Loader>
    </div>
}

export default Loading