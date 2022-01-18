import { Component } from 'react';
import {Container} from '@mui/material';
import ImportBlock from '../importBlock/ImportBlock';
import Arrows from '../arrows/Arrows';
import ExportBlock from '../exportBlock/ExportBlock';
import Rate from '../../services/Rate';
import ErrorMessage from '../error/ErrorMessage';
import Spinner from '../spinner/Spinner';

class App extends Component{
  state = {
      data: {},
      salary: '',
      firstValuteValue: '',
      firstValuteName: '',
      secondValuteValue: '',
      secondValuteName: '',
      firstCurrentText: '',
      secondCurrentText: '',
      swap: false,
      loading: true,
      error: false,
    }
  rate = new Rate();
  onLoaded = (res) => {
    clearInterval(this.interval);
    let arr = [];
    for(let i in res){
        arr.push(res[i]);
    }
    arr.unshift({CharCode:'RUB', ID: '1', Name: 'Российский Рубль', Nominal: 1, Value: 1});
    this.setState({
          data: arr,
          loading: false,
          error: false});
  }
  getData = () => {
    this.rate.getSourses()
    .then(res => this.onLoaded(res.Valute))
    .catch(this.onError)
  }  
  componentDidMount(){
    this.getData();
    }
  changeSalary = (e) => {
    this.setState({salary: e.target.value});
  }
  changeValute = (e, a) => {
    if(e.target.classList.contains('first__input')){
      this.setState({
        firstValuteValue: (+e.target.dataset.value).toFixed(2),
        firstValuteName: e.target.dataset.char,
        firstCurrentText: a,
      })     
    }else{
      this.setState({
        secondValuteValue: (+e.target.dataset.value).toFixed(2),
        secondValuteName: e.target.dataset.char,
        secondCurrentText: a,
      })
    }
  }
  changeSwap = () => {
    let a = this.state.firstValuteValue,
        b = this.state.firstValuteName;
    this.setState({
        swap: !this.state.swap,
        firstValuteValue: this.state.secondValuteValue,
        secondValuteValue: a,
        firstValuteName: this.state.secondValuteName,
        secondValuteName: b,
      })
  }
  onError = () => {
    this.setState({
        loading: false,
        error: true
      })
    this.interval = setInterval(this.getData, 5000);
  }
  render(){
    let {error, loading} = this.state,
        errorMessage = error ? <ErrorMessage/> : null,
        loadMessage = loading ? <Spinner/> : null,
        arrows = !(error || loading) ? <Arrows changeSwap = {this.changeSwap}/> : null;
  return (
    <Container  sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: "1000px",
                margin: '0 auto'}}>
      <ImportBlock  data = {this.state.data} 
                    changeSalary = {this.changeSalary} 
                    salary = {this.state.salary} 
                    firstValuteValue = {this.state.firstValuteValue}
                    firstValuteName = {this.state.firstValuteName}
                    secondValuteValue = {this.state.secondValuteValue}
                    secondValuteName = {this.state.secondValuteName}
                    changeValute = {this.changeValute}
                    currentText = {this.state.secondCurrentText}
                    swap = {this.state.swap}>
      </ImportBlock>
      {loadMessage}
      {errorMessage}
      {arrows}
      <ExportBlock  data = {this.state.data}
                    changeValute = {this.changeValute}
                    salary = {this.state.salary} 
                    firstValuteValue = {this.state.firstValuteValue}
                    firstValuteName = {this.state.firstValuteName}
                    secondValuteValue = {this.state.secondValuteValue}
                    secondValuteName = {this.state.secondValuteName}
                    currentText ={this.state.firstCurrentText}
                    swap = {this.state.swap}> 
      </ExportBlock>
      </Container>
    )
  }
  }
  export default App;
