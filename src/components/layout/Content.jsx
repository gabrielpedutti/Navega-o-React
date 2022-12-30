import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from '../../views/examples/NotFound'
import Param from '../../views/examples/Param'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'


const Content = props => (
    <main className="Content">
        <Routes>
            {/* O atributo "exact" serve para definir que a página Home só vai ser exibida, caso a url tenha apenas "/" como parâmetro. Sem isso, o path do home estando em cima dos outros, fará com que qualquer link clicado no menu direcione para Home, pois começam com /. Se for colocado no final, qualquer link que não esteja com parametro registrado direcionará para home. (no lugar disso é possível fazer uma página 404 NotFound)*/}
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content