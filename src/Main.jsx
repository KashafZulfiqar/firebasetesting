import React, { Component } from 'react'
import "./Style.css"
import axios from 'axios'
export default class Main extends Component {
        state={
            data:[]
        }
    componentWillMount(){
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-04-18&to=2022-04-18&sortBy=popularity&apiKey=42003aa020be442eaf2bbd9a6b8efa96")
        .then((res)=>{
            this.setState({data:res.data.articles})
        })
    }

  render() {
      console.log(this.state.data,"text state");
      const data=this.state.data.map((e,i)=>{
      return<>
  <div className="col-lg-4 ">   
                        <div className="card mt-5" style={{width:"22rem",height:"38rem"}}>
  <img src={e.urlToImage} className="card-img-top img-fluid" alt=""/>
  <div className="card-body d-flex flex-column justify-content-between ">
    <h5 className="card-title text-primary">{e.title}</h5>
    <p className="card-text text-secondary">{e.description}</p>
    <div className='container-fluid text-end text-danger p-0 m-0'><p className=' mt-2'>{e.author}</p></div>
  </div>
</div>
</div>
          </>
      })
    return (
        <>
        <div className="container d-flex flex-wrap">
        {data}
        </div>
        </>
    )
  }
}
