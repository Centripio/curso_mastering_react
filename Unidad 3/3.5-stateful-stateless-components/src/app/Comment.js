import React from 'react'

const Comment = props => (
    <article>
        <p>{props.name}</p>
        <p>{props.comment}</p>
    </article>
)

export default Comment