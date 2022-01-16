import { Component } from 'react';
import './app.css';
import {Container} from '@mui/material';
import ImportBlock from '../importBlock/ImportBlock';
import Arrows from '../arrows/Arrows';
import ExportBlock from '../exportBlock/ExportBlock';
import Rate from '../../services/Rate';
class App extends Component{
  state = {
    data: {},
    salary: '',
    firstValuteValue: '',
    firstValuteName: '',
    secondValuteValue: '',
    secondValuteName: '',
  }
  rate = new Rate();
  onLoaded = (res) => {
      let arr = [];
      for(let i in res){
          arr.push(res[i])
      }
      // arr.unshift({CharCode:'RUB', ID: '1', Name: 'Российский Рубль', Nominal: 1, Value: 1});
      this.setState({data: arr})
    }
  getData = () => {
      this.rate.getSourses()
      .then(res => this.onLoaded(res.Valute))
    }    
  componentDidMount(){
      this.getData()
    }
  changeSalary = (e) => {
    this.setState({salary: e.target.value})
  }
  changeValute = (e) => {
    if(e.target.classList.contains('first__input')){
      this.setState({
              firstValuteValue: (+e.target.dataset.value).toFixed(2),
              firstValuteName: e.target.dataset.char})
    }else{
      this.setState({
        secondValuteValue: (+e.target.dataset.value).toFixed(2),
        secondValuteName: e.target.dataset.char})
    }
    }
  render(){
    return (
      <Container  sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: "1000px",
                    margin: '0 auto'}}>
        <ImportBlock data = {this.state.data} 
                      changeSalary = {this.changeSalary} 
                      salary = {this.state.salary} 
                      firstValuteValue = {this.state.firstValuteValue}
                      firstValuteName = {this.state.firstValuteName}
                      secondValuteValue = {this.state.secondValuteValue}
                      secondValuteName = {this.state.secondValuteName}
                      changeValute = {this.changeValute}>
        </ImportBlock>
        <Arrows/>
        <ExportBlock data = {this.state.data}
                      changeValute = {this.changeValute}
                      salary = {this.state.salary} 
                      firstValuteValue = {this.state.firstValuteValue}
                      firstValuteName = {this.state.firstValuteName}
                      secondValuteValue = {this.state.secondValuteValue}
                      secondValuteName = {this.state.secondValuteName}
        ></ExportBlock>
      </Container>
    )

  }
}
export default App;
