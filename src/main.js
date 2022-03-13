import React from "react"
import Bmi from "./pages/bmi"
import Bank from "./pages/cicilanBank"
import Pembelian from "./pages/pembelian"
import Desimal from "./pages/konversi_desimal"
import Biner from "./pages/konversi_biner"
import Oktal from "./pages/konversi_oktal"
import Heksadesimal from "./pages/konversi_heksadesimal"
import { Route,Switch } from "react-router-dom"

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Bmi}/>
                <Route exact path='/Bank' component={Bank}/>
                <Route exact path='/Pembelian' component={Pembelian}/>
                <Route exact path='/KonversiDesimal' component={Desimal}/>
                <Route exact path='/KonversiBiner' component={Biner}/>
                <Route exact path='/KonversiOktal' component={Oktal}/>
                <Route exact path='/KonversiHeksadesimal' component={Heksadesimal}/>
            </Switch>
        )
    }
}