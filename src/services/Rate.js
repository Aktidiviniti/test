import { Component } from "react";

class Rate extends Component{

    getSourses = async() => {
        let res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        return await res.json()
    }
}
export default Rate;