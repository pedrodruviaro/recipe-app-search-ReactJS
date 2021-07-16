import React from 'react'
import style from '../recipe.module.css'

export default function Recipe({ title, calories, image, ingredients, dietLabels }) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title} >{title}</h1>
            <img src={image} alt={title} className={style.image} />
            <ul>
                {ingredients.map((ingredient, i) => (
                    <li key={i} className={style.item}>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
            <p className={style.calories}>Calories: {calories}</p>
        </div>
    )
}
